'use client'
import React, { useState } from 'react';
import style from './setting.module.css';
import { ic_AdminEditBtn } from '@/src/Utils/svg';
import Dropdown from '@/src/Component/FormElement/Dropdown';
import Heading3Fonts from '@/src/Typography/text/Heading3Fonts';

const StandardizedDeduction = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const yearOptions = Array.from(new Array(50), (val, index) => ({
        name: (currentYear - index).toString(),
        value: currentYear - index,
    }));



    return (
        <>
            <div>
                <div className={style.MainDivForFederalTaxTable}>
                    <div className={style.MainDivForTabHedings}>
                        <div className={style.MainDivForHadingText}>
                            <div className={style.FederalTaxTaxt}>Standard Deduction Rates </div>
                            <div className={style.ReviewAdjustText}>Review and adjust the standard Deduction Rates, including additional reduction for seniors and blind individuals.</div>
                        </div>
                        <div className={style.MainDivForHadingRightContent}>
                            <Dropdown
                                data={yearOptions}
                                value={selectedYear}
                                setValue={setSelectedYear}
                                className={style.DropDownValiue}
                                disable={false}
                            />
                            <button className={style.EditButton}>{ic_AdminEditBtn.icon()}Edit</button>
                        </div>


                    </div>

                    <div className={style.SubHedingHederStandardizedDeduction}>
                        <Heading3Fonts className={style.SubHadingTextStandardizedDeduction} text={'Filling Status'} />
                        <Heading3Fonts className={style.SubHadingTextStandardizedDeduction} text={'Standard deduction'} />
                        <Heading3Fonts className={style.SubHadingTextStandardizedDeduction} text={'additional deduction for seniors (65+)'} />
                        <Heading3Fonts className={style.SubHadingTextStandardizedDeduction} text={'Additional Deduction for blind'} />
                    </div>
                    <div className={style.MainDivForDataStandardDeduction}>
                        <div className={style.SubMainDivForDataStandardDeduction}>$0</div>
                        <div className={style.SubMainDivForDataStandardDeduction}>$11,200</div>
                        <div className={style.SubMainDivForDataStandardDeduction}>$11,200</div>
                        <div className={style.SubMainDivForDataStandardDeduction}>10%</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default StandardizedDeduction;

