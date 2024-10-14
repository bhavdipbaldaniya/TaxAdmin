// 'use client';
// import React, { useState } from 'react';
// import style from './setting.module.css';
// import { ic_AdminEditBtn } from '@/src/Utils/svg';
// import Dropdown from '@/src/Component/FormElement/Dropdown';
// import Heading3Fonts from '@/src/Typography/text/Heading3Fonts';
// import { useRouter } from 'next/navigation';
// import Button from '@/src/Component/FormElement/Button';

// const ManageDropdownItems = () => {
//     const router = useRouter()
//     const deductionData = [
//         {}
//     ]


//     const selectedYearData = deductionData || [];

//     const EditeClick = () => {
//         router.push('/adminsettings/editstandardizededuction')
//     }
//     const ADDClick = () => {
//         router.push('/adminsettings/addstandardizededuction')
//     }

//     return (
//         <div>
//             <div className={style.MainDivForFederalTaxTable}>
//                 <div className={selectedYearData.length == 0 ? style.MainDivForTabHedingsSDS : style.MainDivForTabHedingsSD}>
//                     <div className={style.MainDivForHadingText}>
//                         <div className={style.FederalTaxTaxt}>General Income List</div>
//                         <div className={style.ReviewAdjustText}>Review and modify General Income dropdown list.</div>
//                     </div>

//                     <div className={style.AddBtnDivRates}>
//                         <Button onClick={() => ADDClick()} text={'+ Add Standard Deduction Rates'} />
//                     </div>
//                     <div className={style.MainDivForHadingRightContent}>
//                         <button className={style.EditButton} onClick={EditeClick}>
//                             {ic_AdminEditBtn.icon()} Edit
//                         </button>
//                     </div>
//                 </div>


//                 <div className={style.SubHedingHederManageDropdownItems}>
//                     <Heading3Fonts className={style.SubHedingHederManageDropdownItemsLeftValue} text={'#'} />
//                     <Heading3Fonts className={style.SubHedingHederManageDropdownItemsRightValue} text={'income type'} />
//                 </div>

//                 <div className={style.MainDivForDataStandardDeduction}>
//                     <div className={style.SubMainDivForDataManageDropdownItemsLeft}>01</div>
//                     <div className={style.SubMainDivForDataManageDropdownItemsright}>$Government Bonds</div>
//                 </div>
//                 <div className={style.MainDivForDataStandardDeduction}>
//                     <div className={style.SubMainDivForDataManageDropdownItemsLeft}>02</div>
//                     <div className={style.SubMainDivForDataManageDropdownItemsright}>$Equity</div>
//                 </div>
//                 <div className={style.MainDivForDataStandardDeduction}>
//                     <div className={style.SubMainDivForDataManageDropdownItemsLeft}>03</div>
//                     <div className={style.SubMainDivForDataManageDropdownItemsright}>$Real State</div>
//                 </div>
//             </div>
//             <div className={style.MainDivForFederalTaxTable}>
//                 <div className={selectedYearData.length == 0 ? style.MainDivForTabHedingsSDS : style.MainDivForTabHedingsSD}>
//                     <div className={style.MainDivForHadingText}>
//                         <div className={style.FederalTaxTaxt}>investment income List</div>
//                         <div className={style.ReviewAdjustText}>Review and modify Investment Income dropdown list.</div>
//                     </div>

//                     <div className={style.AddBtnDivRates}>
//                         <Button onClick={() => ADDClick()} text={'+ Add Standard Deduction Rates'} />
//                     </div>
//                     <div className={style.MainDivForHadingRightContent}>
//                         <button className={style.EditButton} onClick={EditeClick}>
//                             {ic_AdminEditBtn.icon()} Edit
//                         </button>
//                     </div>
//                 </div>


//                 <div className={style.SubHedingHederManageDropdownItems}>
//                     <Heading3Fonts className={style.SubHedingHederManageDropdownItemsLeftValue} text={'#'} />
//                     <Heading3Fonts className={style.SubHedingHederManageDropdownItemsRightValue} text={'income type'} />
//                 </div>

//                 <div className={style.MainDivForDataStandardDeduction}>
//                     <div className={style.SubMainDivForDataManageDropdownItemsLeft}>01</div>
//                     <div className={style.SubMainDivForDataManageDropdownItemsright}>$Government Bonds</div>
//                 </div>
//                 <div className={style.MainDivForDataStandardDeduction}>
//                     <div className={style.SubMainDivForDataManageDropdownItemsLeft}>02</div>
//                     <div className={style.SubMainDivForDataManageDropdownItemsright}>$Equity</div>
//                 </div>
//                 <div className={style.MainDivForDataStandardDeduction}>
//                     <div className={style.SubMainDivForDataManageDropdownItemsLeft}>03</div>
//                     <div className={style.SubMainDivForDataManageDropdownItemsright}>$Real State</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageDropdownItems;




'use client';
import React from 'react';
import style from './setting.module.css';
import { ic_AdminEditBtn } from '@/src/Utils/svg';
import Heading3Fonts from '@/src/Typography/text/Heading3Fonts';
import { useRouter } from 'next/navigation';
import Button from '@/src/Component/FormElement/Button';

const ManageDropdownItems = () => {
    const router = useRouter();

    const generalIncomeData = [
        { id: '01', incomeType: 'Government Bonds' },
        { id: '02', incomeType: 'Equity' },
        { id: '03', incomeType: 'Real State' },
    ];

    const investmentIncomeData = [
        { id: '01', incomeType: 'Government Bonds' },
        { id: '02', incomeType: 'Equity' },
        { id: '03', incomeType: 'Real State' },
    ];

    const EditeClick = () => {
        router.push('/adminsettings/editmanagedropdownitems');
    };

    const ADDClick = () => {
        router.push('/adminsettings/addstandardizededuction');
    };

    return (
        <div>
            <div className={style.MainDivForFederalTaxTable}>
                <div className={generalIncomeData.length == 0 ? style.MainDivForTabHedingsSDS : style.MainDivForTabHedingsSD}>
                    <div className={style.MainDivForHadingText}>
                        <div className={style.FederalTaxTaxt}>General Income List</div>
                        <div className={style.ReviewAdjustText}>Review and modify General Income dropdown list.</div>
                    </div>

                    {generalIncomeData.length === 0 ?
                        (
                            <div className={style.AddBtnDivRates}>
                                <Button onClick={ADDClick} text={'+ Add Items in the list'} />
                            </div>
                        ) : (
                            <div className={style.MainDivForHadingRightContent}>
                                <button className={style.EditButton} onClick={EditeClick}>
                                    {ic_AdminEditBtn.icon()} Edit
                                </button>
                            </div>
                        )
                    }
                </div>

                {generalIncomeData.length > 0 && <div className={style.SubHedingHederManageDropdownItems}>
                    <Heading3Fonts className={style.SubHedingHederManageDropdownItemsLeftValue} text={'#'} />
                    <Heading3Fonts className={style.SubHedingHederManageDropdownItemsRightValue} text={'Income Type'} />
                </div>}

                {generalIncomeData.map((item) => (
                    <div key={item.id} className={style.MainDivForDataStandardDeduction}>
                        <div className={style.SubMainDivForDataManageDropdownItemsLeft}>{item.id}</div>
                        <div className={style.SubMainDivForDataManageDropdownItemsright}>{item.incomeType}</div>
                    </div>
                ))}
            </div>

            <div className={style.MainDivForFederalTaxTable}>
                <div className={investmentIncomeData.length == 0 ? style.MainDivForTabHedingsSDS : style.MainDivForTabHedingsSD}>

                    <div className={style.MainDivForHadingText}>
                        <div className={style.FederalTaxTaxt}>Investment Income List</div>
                        <div className={style.ReviewAdjustText}>Review and modify Investment Income dropdown list.</div>
                    </div>
                    {investmentIncomeData.length === 0 ?
                        (
                            <div className={style.AddBtnDivRates}>
                                <Button onClick={ADDClick} text={'+ Add Items in the list'} />
                            </div>
                        ) : (
                            <div className={style.MainDivForHadingRightContent}>
                                <button className={style.EditButton} onClick={EditeClick}>
                                    {ic_AdminEditBtn.icon()} Edit
                                </button>
                            </div>
                        )
                    }
                </div>

                {investmentIncomeData.length > 0 && <div className={style.SubHedingHederManageDropdownItems}>
                    <Heading3Fonts className={style.SubHedingHederManageDropdownItemsLeftValue} text={'#'} />
                    <Heading3Fonts className={style.SubHedingHederManageDropdownItemsRightValue} text={'Income Type'} />
                </div>
                }

                {investmentIncomeData.map((item) => (
                    <div key={item.id} className={style.MainDivForDataStandardDeduction}>
                        <div className={style.SubMainDivForDataManageDropdownItemsLeft}>{item.id}</div>
                        <div className={style.SubMainDivForDataManageDropdownItemsright}>{item.incomeType}</div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default ManageDropdownItems;
