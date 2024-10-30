import { useEffect, useState } from 'react';
import { ObjTable } from '@/components/ObjTable';
import { Error } from '@/components/Error';
import { Spinner } from '@/components/Spinner';
import { config } from '../configs/jsph';

export function Fetcher({ url }) {

    const
        [data, setData] = useState(null),
        [error, setError] = useState(null);

    useEffect(() => {
        setData(null);
        setError(null);

        async function go() {

            try {
                const
                    response = await fetch(url),
                    data = await response.json();
                setData(data);
            } catch (err) {
                setError(err);
            }
        }
        go();
    }, [url]);

    if (error)
        return <Error error={error} />
    if (data)
        return <ObjTable data={data} config={config}/>
    return <Spinner />
}