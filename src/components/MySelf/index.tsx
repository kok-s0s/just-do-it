import { AppMinimap, ArtBoard } from './styles'
import { Graph } from '@antv/x6'
import { Component } from 'react'
import { SimpleNodeView } from './view'
import Button from '@mui/material/Button'

const data = {
    nodes: [
        {
            id: 'node1',
            x: 0,
            y: 10,
            width: 100,
            height: 40,
            attrs: {
                body: {
                    fill: '#2ECC71',
                    stroke: '#000',
                    strokeDasharray: '10,2'
                },
                label: {
                    text: '技术栈',
                    fill: '#333',
                    fontSize: 13
                }
            }
        },
        {
            id: 'node2',
            x: 240,
            y: 10,
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
                    text: 'Front-End',
                    fill: '#333',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontVariant: 'small-caps'
                }
            }
        },
        {
            id: 'node3',
            x: 260,
            y: 80,
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
                    text: 'Back-End',
                    fill: '#333',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontVariant: 'small-caps'
                }
            }
        },
        {
            id: 'node4',
            x: 240,
            y: 150,
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
                    text: 'OS',
                    fill: '#333',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontVariant: 'small-caps'
                }
            }
        },
        {
            id: 'node5',
            x: 200,
            y: 220,
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
                    text: 'Python',
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
        },
        {
            source: 'node1',
            target: 'node3'
        },
        {
            source: 'node1',
            target: 'node4'
        },
        {
            source: 'node1',
            target: 'node5'
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
                <Button
                    sx={{
                        fontSize: '1.3rem',
                        position: 'fixed',
                        right: '2rem',
                        bottom: '28rem'
                    }}
                >
                    编辑模式
                </Button>
            </>
        )
    }
}
