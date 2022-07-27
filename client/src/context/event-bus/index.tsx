import mitt, { Emitter, Handler } from 'mitt';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { BusEventTypes } from './types';

export const BusContext = createContext<Emitter<BusEventTypes> | null>(null);

export const useBus = () => {
	const bus = useContext(BusContext);
	if (!bus) throw new Error('Missing context');
	return bus;
};

export const useListener = <TKey extends keyof BusEventTypes>(
	name: TKey, listener: Handler<BusEventTypes[TKey]>) => {
	const bus = useBus();
	useEffect(() => {
		bus.on(name, listener);
		return () => {
			bus.off(name, listener);
		};
	}, [bus, name, listener]);
};

export const BusProvider = ({ children }: PropsWithChildren<unknown>) => {
	const [bus] = useState(() => mitt<BusEventTypes>());
	return <BusContext.Provider value={bus}>{children}</BusContext.Provider>;
};
