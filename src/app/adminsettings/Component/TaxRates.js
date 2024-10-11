'use client'
import React, { useState } from 'react';
import style from './setting.module.css';
import { ic_AdminEditBtn, ic_AdminSetings } from '@/src/Utils/svg';
import Dropdown from '@/src/Component/FormElement/Dropdown';
import Heading3Fonts from '@/src/Typography/text/Heading3Fonts';
import { useRouter } from 'next/navigation';
import Button from '@/src/Component/FormElement/Button';

const TaxRates = () => {
    const router = useRouter()
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [activeStatus, setActiveStatus] = useState('MarriedFilingJointly');



    const yearOptions = Array.from(new Array(50), (val, index) => ({
        name: (currentYear - index).toString(),
        value: currentYear - index,
    }));

    const Status = [
        { value: 'MarriedFilingJointly', name: 'Married Filing Jointly' },
        { value: 'Single', name: 'Single' },
        { value: 'MarriedFilingSeprately', name: 'Married Filing Seprately' },
        { value: 'HeadOfHousehold', name: 'Head Of Household' }
    ];

    // Example tax bracket data in JSON format
    const taxBrackets = [
        { incomeRange: ['$0', '$11,200'], taxRate: '10%' },
        { incomeRange: ['$11,201', '$44,725'], taxRate: '12%' },
        { incomeRange: ['$44,726', '$95,375'], taxRate: '22%' },
        { incomeRange: ['$95,376', '$182,100'], taxRate: '24%' },
        { incomeRange: ['$182,101', '$231,250'], taxRate: '32%' },
        { incomeRange: ['$231,251', '$578,125'], taxRate: '35%' },
        { incomeRange: ['$578,126', 'and above'], taxRate: '37%' },
    ];

    const EditSetting = () => {
        router.push('/adminsettings/editsetting')
    }

    return (
        <>
            <div>
                <div className={style.MainDivForFederalTaxTable}>
                    <div className={taxBrackets.length == 0 ? style.NoDataAvelabul : style.MainDivForTabHedings}>
                        <div className={style.MainDivForHadingText}>
                            <div className={style.FederalTaxTaxt}>Federal Tax Bracket</div>
                            <div className={style.ReviewAdjustText}>Review and adjust the federal tax rates applicable to social security funds.</div>
                        </div>
                        {taxBrackets.length > 0 && <div className={style.MainDivForHadingRightContent}>
                            <Dropdown
                                data={Status}
                                value={activeStatus}
                                setValue={setActiveStatus}
                                className={style.DropDownValiueStatus}
                                disable={false}
                            />
                            <Dropdown
                                data={yearOptions}
                                value={selectedYear}
                                setValue={setSelectedYear}
                                className={style.DropDownValiue}
                                disable={false}
                            />
                            <button className={style.EditButton} onClick={() => EditSetting()}>{ic_AdminEditBtn.icon()}Edit</button>
                        </div>}
                        {taxBrackets.length == 0 && <div className={style.AddBtnDivRates}>
                            <Button onClick={() => EditSetting()} text={'+ Tax Rates'} />
                        </div>}

                    </div>

                    {taxBrackets.length > 0 && <div className={style.SubHedingHeder}>
                        <Heading3Fonts className={style.SubHadingText} text={'Income Range'} />
                        <Heading3Fonts className={style.SubHadingTextTaxRate} text={'Tax Rate'} />
                    </div>}

                    {taxBrackets.map((bracket, index) => (
                        <div key={index} className={style.SubHedingHederContent}>
                            <div className={style.SubHadingTextContent}>
                                <div className={style.SubContentText}>{bracket.incomeRange[0]}</div>
                                <div className={style.SubContentTextSecond}>{bracket.incomeRange[1]}</div>
                            </div>
                            <div className={style.SubContentTextSecondSection}>{bracket.taxRate}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TaxRates;
