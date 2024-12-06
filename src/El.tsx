interface EventListener {  
    event: string;  
    callback: (e: Event) => void;  
}  

interface ElProps {  
    element: keyof HTMLElementTagNameMap; // Restrict to valid HTML elements  
    children?: (HTMLElement | string)[];  
    eventListener?: EventListener[];  
    dataset?: { [key: string]: string };  
    restAttrs?: { [key: string]: string | number | boolean };  
    className?: string;  
}  

export function El({  
    element,  
    children,  
    eventListener,  
    dataset,  
    restAttrs = {},  
    className = "",  
    ...rest // Allows additional properties not strictly defined  
}: ElProps): HTMLElement {  
    const elem = document.createElement(element);  

    // Set class name  
    elem.className = className; // Using className property directly  

    // Set additional attributes from restAttrs  
    for (const [key, value] of Object.entries(restAttrs)) {  
        elem.setAttribute(key, String(value)); // Ensure attributes are strings  
    }  

    // Set custom attributes from rest  
    // Only assign valid properties on the HTMLElement  
    for (const [attr, value] of Object.entries(rest)) {  
        if (attr in elem) {  
            (elem as any)[attr] = value; // Type assertion for direct property access  
        }  
    }  

    // Append children  
    if (children) {  
        for (const child of children) {  
            if (typeof child === "string") {  
                elem.appendChild(document.createTextNode(child)); // Handle string children  
            } else if (child instanceof HTMLElement) {  
                elem.append(child); // Handle HTMLElement children  
            }  
        }  
    }  

    // Add event listeners  
    if (eventListener) {  
        eventListener.forEach(el => elem.addEventListener(el.event, el.callback));  
    }  

    // Set dataset attributes  
    if (dataset) {  
        for (const key in dataset) {  
            elem.dataset[key] = dataset[key];  
        }  
    }  

    return elem;  
}  

export default El;