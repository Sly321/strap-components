"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button extends HTMLElement {
    constructor() {
        super();
        this.text = '';
        this.properties = {};
        this.text = this.innerHTML;
        for (let x = 0; x < this.attributes.length; x++) {
            const attr = this.attributes.item(x);
            if (attr) {
                this.properties[attr.name] = attr.value;
            }
        }
        this.innerHTML = this.render();
    }
    // classNames
    get clx() {
        const rootClasses = this.properties.class;
        delete this.properties.class;
        return `btn btn-${this.outline ? 'outline-' : ''}${this.color}${rootClasses ? ` ${rootClasses}` : ''}${this.block ? ' btn-block' : ''}`;
    }
    get color() {
        delete this.properties.color;
        return (this.hasAttribute('color') && this.getAttribute('color')) || 'primary';
    }
    get outline() {
        delete this.properties.outline;
        return this.hasAttribute('outline') && this.getAttribute('outline') !== 'false';
    }
    get block() {
        delete this.properties.outline;
        return this.hasAttribute('block') && this.getAttribute('block') !== 'false';
    }
    render() {
        return `<button class="${this.clx}" ${Object.keys(this.properties)
            .map(key => {
            return `${key}="${this.properties[key]}"`;
        })
            .join(' ')}>
			${this.text}
		</button>`;
    }
}
exports.default = Button;
customElements.define('bs-button', Button);
//# sourceMappingURL=Button.js.map