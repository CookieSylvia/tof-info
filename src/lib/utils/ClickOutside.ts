export const clickOutside = (node: Node) => {
    const handleClick = (event: MouseEvent) => {
        if (event.target instanceof Node) {
            if (!node.contains(event.target) && node != event.target && !event.defaultPrevented) {
                node.dispatchEvent(new CustomEvent('click_outside', {detail: {
                    node: node,
                    target: event.target,
                }}));
            }
        }
    }
    
    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}