import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';







const Coin = () => {

    const [coin, setCoin] = useState()
    const params = useParams();

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
            //console.log(response.data)
        })
    }, [url])

    return (
        <div className='rounded-div my-12 py-8'>
            <div className='flex py-8'>
                <img className='w-20 mr-8' src={coin?.image?.large} alt='/' />
                <div>
                    <p className='text-3xl font-bold'>{coin?.name} price</p>
                    <p>({coin?.symbol?.toUpperCase()} / USD)</p>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <div className='flex justify-between'>
                        {coin?.market_data?.current_price ? (<p className='text-3xl font-bold'>${coin?.market_data?.current_price.usd.toLocaleString()}</p>) : null}
                        <p>7 day</p>
                    </div>
                    <div>
                        <Sparklines data={coin?.market_data?.sparkline_7d.price}>
                            <SparklinesLine color='green' />
                        </Sparklines>
                    </div>
                    <div className='flex justify-between py-4'>
                        <div>
                            <p className='text-gray-400 text-sm'>Market Value</p>
                            {coin?.market_data?.market_cap ? (<p>${coin?.market_data?.market_cap.usd.toLocaleString()}</p>) : null}
                        </div>
                        <div>
                            <p className='text-gray-400 text-sm'>Volume 24hr</p>
                            {coin?.market_data?.market_cap ? (<p>${coin?.market_data?.total_volume.usd.toLocaleString()}</p>) : null}
                        </div>
                    </div>
                    <div className='flex justify-between py-4'>
                        <div>
                            <p className='text-gray-400 text-sm'>24hr high</p>
                            {coin?.market_data?.high_24h ? (<p>${coin?.market_data?.high_24h.usd.toLocaleString()}</p>) : null}
                        </div>
                        <div>
                            <p className='text-gray-400 text-sm'>24hr Low</p>
                            {coin?.market_data?.low_24h ? (<p>${coin?.market_data?.low_24h.usd.toLocaleString()}</p>) : null}
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-xl font-bold text-gray-500'>Market Stats</p>
                    <div className='flex justify-between py-4'>
                        <div>
                            <p className='text -sm text-gray-400 '>Market Rank</p>
                            {coin?.market_cap_rank}
                        </div>
                        <div>
                            <p className='text -sm text-gray-400 '>Hashing algorithm</p>
                            {coin?.hashing_algorithm ? <p>{coin?.hashing_algorithm}</p> : null}
                        </div>
                        <div>
                            <p className='text -sm text-gray-400 '>Trust score</p>
                            {coin?.tickers ? <p>{coin?.liquidity_score.toFixed(3)}</p> : null}
                        </div>
                    </div>
                    <div className='flex justify-between py-2'>
                        <div>
                            <p className='text -sm text-gray-400 '>Price change/24hr</p>
                            {coin?.market_data ? (<p>{coin?.market_data?.price_change_percentage_24h.toFixed(3)}%</p>) : null}
                        </div>
                        <div>
                            <p className='text -sm text-gray-400 '>Price change/7days</p>
                            {coin?.market_data ? (<p>{coin?.market_data?.price_change_percentage_7d.toFixed(3)}%</p>) : null}
                        </div>
                        <div>
                            <p className='text -sm text-gray-400 '>Price change/14days</p>
                            {coin?.market_data ? (<p>{coin?.market_data?.price_change_percentage_14d.toFixed(3)}%</p>) : null}
                        </div>
                    </div>
                    <div className='flex justify-between py-4'>
                        <div>
                            <p className='text -sm text-gray-400 '>Price change/30days</p>
                            {coin?.market_data ? (<p>{coin?.market_data?.price_change_percentage_30d.toFixed(3)}%</p>) : null}
                        </div>
                        <div>
                            <p className='text -sm text-gray-400 '>Price change/60days</p>
                            {coin?.market_data ? (<p>{coin?.market_data?.price_change_percentage_60d.toFixed(3)}%</p>) : null}
                        </div>
                        <div>
                            <p className='text -sm text-gray-400 '>Price change/1yr</p>
                            {coin?.market_data ? (<p>{coin?.market_data?.price_change_percentage_1y.toFixed(3)}%</p>) : null}
                        </div>
                    </div>
                    <div className='flex justify-around p-8 text-teal-700 text-2xl'>
                        <FaTwitter />
                        <FaFacebook />
                        <FaReddit />
                        <FaGithub />
                    </div>
                </div>
            </div>

            <div className='py-4 px-2'>
                <p className='font-bold text-xl'>About {coin?.name}</p>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coin?.description ? coin?.description?.en : ''), }}></p>
            </div>

        </div>
    );
}

export default Coin;
