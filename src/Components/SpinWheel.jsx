import React from 'react'
import { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette'
import { useNavigate } from 'react-router-dom'
import { useSelector, dispatch } from '../store/index';
import { saveMember } from '../store/reducers/memberinfo';


export default (props) => {

  

    // const players = useSelector((state) => state.members)
    const navigate = useNavigate();

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [startingOptionIndex, setStartingOptionIndex] = useState(12);
    const [perpendicularText, setPerpendicularText] = useState(false);
    const [user_id, setUser_ID] = useState(1);
    const [database, setDB] = useState([]);
    const [spinvalues, setSpinValues] = useState([{
        option: 0,
        style: {
            backgroundColor: 'green',
            textColor: 'white'
        }
    }]);

    // Setting wheel's options and styles

    useEffect(() => {
        const newData = [];
        for (let index = 0; index < 25; index++) {
            if (index === 0) {
                newData.push({ option: "again", style: { backgroundColor: 'green', textColor: 'white' } })
            }
            else {
                newData.push({
                    option: 30 + Math.floor(50 * Math.random()),
                    style: newData?.length % 2 === 0 ? { backgroundColor: '#9d0b02', textColor: 'white' } : { backgroundColor: 'black', textColor: 'white' }
                })
            }
        }
        // console.log(newData);
        setSpinValues(newData);
    }, [])

    useEffect(() => {
        dispatch(saveMember(database));
        // console.log(database, 'database');
    }, [database])

    // Start rotating the wheel.
    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * spinvalues?.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='relative'>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={spinvalues}
                    startingOptionIndex={startingOptionIndex}
                    perpendicularText={perpendicularText}
                    fontSize={[15]}
                    textDistance={[75]}
                    outerBorderColor={['#dba93e']}
                    outerBorderWidth={[15]}
                    innerRadius={[40]}
                    innerBorderColor={['#252216']}
                    innerBorderWidth={[20]}
                    radiusLineColor={['#e8ab94']}
                    radiusLineWidth={[3]}
                    pointerProps={[{ "src": 'arrow.png' }]}
                    perpendicularText={perpendicularText}
                    onStopSpinning={async () => {
                        setMustSpin(false);
                        // setPerpendicularText(true);
                        // console.log(spinvalues[prizeNumber]?.option);
                        setUser_ID(user_id + 1);
                        // console.log([{user_id: `${user_id}`,prizeNumber: `${data[prizeNumber].option}`}]);
                        await setDB([...database, { user_id: `${user_id}`, prizeNumber: `${spinvalues[prizeNumber]?.option}` }]);
                        // console.log(database);

                        // setDB(prevStat => {
                        //     const newStat = [...prevStat, {user_id: `${user_id}`,prizeNumber: `${data[prizeNumber].option}`}];
                        //     console.log(newStat);
                        //     return newStat;
                        // })
                    }}
                    className='absolute z-0'
                />
                <img src="arrow.png" alt="arrow" className='absolute z-10 w-[6em] h-[6em] top-0 right-0 ' />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <img src="./icons/888-1.png" alt="888" className='h-[10em] w-[17em] opacity-50 hover:opacity-90 hover:h-[11em] hover:mt-[-0.5em] hover:mb-[-0.5em] hover:w-[18.5em] hover:ml-[-0.75em] hover:mr-[-0.75em]' onClick={() => {
                   /* if (user_id <= 3)*/ handleSpinClick();
                }
                } />
                <img src="./icons/999-1.png" alt="888" className="h-[10em] w-[17em] opacity-50 hover:opacity-90 hover:h-[11em] hover:mt-[-0.5em] hover:mb-[-0.5em] hover:w-[18.5em] hover:ml-[-0.75em] hover:mr-[-0.75em]" onClick={() => navigate('/welcomepage')} />
            </div>
            {/* <div className='bg-[#dba93e]'></div> */}
        </div>
    )
}



