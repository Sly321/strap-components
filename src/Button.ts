export default class Button extends HTMLElement {
    private text: string = ''
    private properties: { [key: string]: string } = {}

    constructor() {
        super()
        this.text = this.innerHTML

        for (let x = 0; x < this.attributes.length; x++) {
            const attr = this.attributes.item(x)
            if (attr) {
                this.properties[attr.name] = attr.value
            }
        }

        this.innerHTML = this.render()
    }

    get clx(): string {
        const rootClasses = this.properties.class
        delete this.properties.class
        return `btn btn-${this.outline ? 'outline-' : ''}${this.color}${
            rootClasses ? ` ${rootClasses}` : ''
        }`
    }

    get color(): string {
        delete this.properties.color
        return (this.hasAttribute('color') && this.getAttribute('color')) || 'primary'
    }

    get outline(): boolean {
        delete this.properties.outline
        return this.hasAttribute('outline') && this.getAttribute('outline') !== 'false'
    }

    render() {
        return `<button class="${this.clx}" ${Object.keys(this.properties)
            .map(key => {
                return `${key}="${this.properties[key]}"`
            })
            .join(' ')}>
			${this.text}
		</button>`
    }
}

customElements.define('bs-button', Button)
