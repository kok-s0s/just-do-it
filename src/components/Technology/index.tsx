import { Icon, Link, WebSites } from './styles'
import Tooltip from '@mui/material/Tooltip'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect } from 'react'
import { getWebSites } from '../../api/websites'

interface WebSite {
    name: string
    description: string
    link: string
    image: string
}

export function Technology() {
    const [webSites, setWebSites] = useLocalStorage('websites', [])

    useEffect(() => {
        const getData = async () => {
            const res = await getWebSites()

            if (res.status === 200) {
                setWebSites(res.data)
            }
        }

        getData().catch(function (error) {
            console.log(error)
        })
    }, [])

    return (
        <WebSites>
            {webSites.map((webSite: WebSite, index: number) => {
                return (
                    <Tooltip
                        title={webSite.description}
                        placement="top"
                        key={index}
                    >
                        <Link href={webSite.link} target="_blank">
                            <Icon src={webSite.image}></Icon>
                        </Link>
                    </Tooltip>
                )
            })}
        </WebSites>
    )
}
