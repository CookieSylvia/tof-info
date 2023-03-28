type EventHandler<E extends Event = Event, T extends EventTarget = Element> =
(event: E & { currentTarget: EventTarget & T}) => unknown;

export type ClickOutsideEvent = CustomEvent<{
    node: Node;
    target: Node;
}>
export type ClickOutsideEventHandler<T extends EventTarget = EventTarget> = EventHandler<ClickOutsideEvent, T>