import React, { useState } from 'react';
import styles from './Pagination.module.css';
import arrow1 from '../../../Decor/Image/arrow1.png'
import arrow2 from '../../../Decor/Image/arrow2.png'


let Pagination = (props) => {
    let countPages = Math.ceil(props.totalItemCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    };

    let countPart = Math.ceil(countPages / props.partSize); // Определяем количество частей (Determine the number of parts)
    let [partNumber, setPartNumber] = useState(1);
    let leftBorderNumber = (partNumber - 1) * props.partSize + 1; //Определяем левую границу (Define the left border)
    let rightBorderNumber = partNumber * props.partSize; //Определяем правую границу (Define the right border)

    return (
        <div className={styles.pages}>
            {partNumber > 1 && <div className={styles.buttons} onClick={() => { setPartNumber(partNumber - 1) }}><img src={arrow2} /> </div>}
            {pages.filter(page => page >= leftBorderNumber && page <= rightBorderNumber)
                .map((item, index) => {
                    return <span key={index} onClick={() => { props.newPageChanged(item) }} className={props.activePage === item && styles.activePage}>{item}</span>
                })
            }
            {countPart > partNumber && <div className={styles.buttons} onClick={() => { setPartNumber(partNumber + 1) }}><img src={arrow1} /></div>}
        </div>
    )
}

export default Pagination;