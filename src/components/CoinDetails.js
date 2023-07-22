import React, { useState } from 'react';
import CoinInfo from './CoinInfo';

const CoinDetails = ({ coins }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className='rounded-div my-6'>
            <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
                <h1 className=' text-2xl font-bold my-2'>All Currencies</h1>
                <form>
                    <input className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl' type='text' placeholder='Search a coin' onChange={(e) => setSearchText(e.target.value)} />
                </form>
            </div>
            <table className='w-full border-collapse text-center'>
                <thead>
                    <tr className='border-b'>
                        <th></th>
                        <th className='px-4'>#</th>
                        <th className='text-left'>Coin</th>
                        <th></th>
                        <th>Price</th>
                        <th>24hr</th>
                        <th className='hidden md:table-cell'>24hr volume</th>
                        <th className='hidden sm:table-cell'>Mkt</th>
                        <th>Last 7 days</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.filter((value) => {
                        if (searchText === '') {
                            return value
                        } else if (
                            value.name.toLowerCase()
                                .includes(searchText.toLocaleLowerCase())
                        ) {
                            return value;
                        }
                    }).map((coin) => (
                        <CoinInfo coin={coin} key={coin.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CoinDetails;
