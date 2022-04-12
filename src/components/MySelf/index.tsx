import { AppMinimap, ArtBoard } from './styles'
import { Graph } from '@antv/x6'
import { Component } from 'react'
import { SimpleNodeView } from './view'

const data = {
    nodes: [
        {
            id: 'node1',
            x: 40,
            y: 40,
            width: 100,
            height: 40,
            attrs: {
                body: {
                    fill: '#2ECC71',
                    stroke: '#000',
                    strokeDasharray: '10,2'
                },
                label: {
                    text: 'Hello',
                    fill: '#333',
                    fontSize: 13
                }
            }
        },
        {
            id: 'node2',
            x: 180,
            y: 240,
            width: 100,
            height: 40,
            attrs: {
                body: {
                    fill: '#F39C12',
                    stroke: '#000',
                    rx: 16,
                    ry: 16
                },
                label: {
                    text: 'World',
                    fill: '#333',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontVariant: 'small-caps'
                }
            }
        }
    ],
    edges: [
        {
            source: 'node1',
            target: 'node2'
        }
    ]
}

export default class MySelf extends Component {
    // @ts-ignore
    private container: HTMLDivElement
    // @ts-ignore
    private minimapContainer: HTMLDivElement

    componentDidMount() {
        const graph = new Graph({
            container: this.container,
            scroller: {
                enabled: true,
                pannable: true,
                pageVisible: true,
                pageBreak: false
            },
            mousewheel: {
                enabled: true,
                modifiers: ['ctrl', 'meta']
            },
            minimap: {
                enabled: true,
                container: this.minimapContainer,
                width: 240,
                height: 200,
                graphOptions: {
                    async: true,
                    getCellView(cell) {
                        if (cell.isNode()) {
                            return SimpleNodeView
                        }
                    },
                    createCellView(cell) {
                        if (cell.isEdge()) {
                            return null
                        }
                    }
                }
            }
        })

        graph.fromJSON(data)

        graph.drawBackground({
            color: '#f5f5f5'
        })
        graph.centerContent()
    }

    refContainer = (container: HTMLDivElement) => {
        this.container = container
    }

    refMiniMapContainer = (container: HTMLDivElement) => {
        this.minimapContainer = container
    }

    render() {
        return (
            <>
                <ArtBoard ref={this.refContainer} />
                <AppMinimap ref={this.refMiniMapContainer} />
            </>
        )
    }
}
