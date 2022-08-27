import { Center, Loader, Text } from '@mantine/core';
import axios, { AxiosResponse } from 'axios'
import { FC, useEffect, useState } from 'react';

const CoinList: FC = () => {
    const [data, setData] = useState<AxiosResponse | null>(null)
    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://cryptopia-backend.herokuapp.com/coin/assets')
            console.log(response)
            setData(response)
        }
        // getData()
    }, [])
    return (
        <Center>
            {data ? <Text>Loaded!</Text> : <Loader size="xl" />}
        </Center>
    );
};

export default CoinList;