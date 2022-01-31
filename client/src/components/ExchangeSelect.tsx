import { Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/esm/Dropdown'

export function ExchangeSelect(props: any) {
    const exchanges = props.exchanges
    const activeExchanges = props.activeExchanges

    const onExchangeClicked = props.onExchangeClicked

    return (
        <div>
            {exchanges.map((ex: string) => {
                const isEnabled = activeExchanges.includes(ex)
                return <Button 
                    style={{marginRight: '6px', marginBottom: '4px'}}
                    key={ex}
                    variant={isEnabled ? "success" : "outline-success"}
                    size="lg"
                    onClick={() => onExchangeClicked(ex)}
                    >{ex}</Button>
            })}
        </div>
    )
}