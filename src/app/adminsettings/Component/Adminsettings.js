// 'use client'
// import React, { useState } from 'react';
// import style from './setting.module.css';
// import Backsvg from '@/src/Component/Back/Backsvg';
// import { ic_AdminEditBtn, ic_AdminSetings } from '@/src/Utils/svg';
// import Dropdown from '@/src/Component/FormElement/Dropdown';
// import Heading3Fonts from '@/src/Typography/text/Heading3Fonts';

// const Adminsettings = () => {
//     const currentYear = new Date().getFullYear();
//     const [selectedYear, setSelectedYear] = useState(currentYear);
//     const [activeTab, setActiveTab] = useState('Tax Rates');
//     const [activeStatus, setActiveStatus] = useState('MarriedFilingJointly');

//     // Function to handle tab click
//     const handleTabClick = (tabName) => {
//         setActiveTab(tabName); // Set the clicked tab as active
//     };


//     const yearOptions = Array.from(new Array(50), (val, index) => ({
//         name: (currentYear - index).toString(),
//         value: currentYear - index,
//     }));

//     const Status = [
//         { value: 'MarriedFilingJointly', name: 'Married Filing Jointly' },
//         { value: 'Single', name: 'Single' },
//         { value: 'MarriedFilingSeprately', name: 'Married Filing Seprately' },
//         { value: 'HeadOfHousehold', name: 'Head Of Household' }
//     ]

//     const Value = Status.map((val) => {

//     })
//     return (
//         <>
//             <Backsvg Svg={ic_AdminSetings.icon()} text={'Admin Settings'} />
//             <div className={style.MainDivForHederTab}>
//                 <div
//                     className={activeTab === 'Tax Rates' ? style.TextTabDivActivTab : style.TextTabDiv}
//                     onClick={() => handleTabClick('Tax Rates')}
//                 >
//                     Tax Rates
//                 </div>
//                 <div
//                     className={activeTab === 'Standardized Deduction' ? style.TextTabDivActivTab : style.TextTabDiv}
//                     onClick={() => handleTabClick('Standardized Deduction')}
//                 >
//                     Standardized Deduction
//                 </div>
//                 <div
//                     className={activeTab === 'State Tax List' ? style.TextTabDivActivTab : style.TextTabDiv}
//                     onClick={() => handleTabClick('State Tax List')}
//                 >
//                     State Tax List
//                 </div>
//                 <div
//                     className={activeTab === 'Manage Dropdown Items' ? style.TextTabDivActivTab : style.TextTabDiv}
//                     onClick={() => handleTabClick('Manage Dropdown Items')}
//                 >
//                     Manage Dropdown Items
//                 </div>
//             </div>




//             <div>
//                 <div className={style.MainDivForFederalTaxTable}>
//                     <div className={style.MainDivForTabHedings}>
//                         <div className={style.MainDivForHadingText}>
//                             <div className={style.FederalTaxTaxt}>Federal Tax Bracket</div>
//                             <div className={style.ReviewAdjustText}>Review and adjust the federal tax rates applicable to social security funds.</div>
//                         </div>
//                         <div className={style.MainDivForHadingRightContent}>
//                             <Dropdown
//                                 data={Status}
//                                 value={activeStatus}
//                                 setValue={setActiveStatus}
//                                 className={style.DropDownValiueStatus}
//                                 disable={false}
//                             />
//                             <Dropdown
//                                 data={yearOptions}
//                                 value={selectedYear}
//                                 setValue={setSelectedYear}
//                                 className={style.DropDownValiue}
//                                 disable={false}
//                             />
//                             <button className={style.EditButton}>{ic_AdminEditBtn.icon()}Edit</button>
//                         </div>


//                     </div>

//                     <div className={style.SubHedingHeder}>
//                         <Heading3Fonts className={style.SubHadingText} text={'Income Range'} />
//                         <Heading3Fonts className={style.SubHadingTextTaxRate} text={'Tax Rate'} />
//                     </div>
//                     <div className={style.SubHedingHederContent}>
//                         <div className={style.SubHadingTextContent}>
//                             <div className={style.SubContentText}>$0</div>
//                             <div className={style.SubContentTextSecond}>$11,200</div>
//                         </div>
//                         <div className={style.SubContentTextSecondSection}>10%</div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default Adminsettings;


'use client'
import React, { useState } from 'react';
import style from './setting.module.css';
import Backsvg from '@/src/Component/Back/Backsvg';
import { ic_AdminSetings } from '@/src/Utils/svg';
import StandardizedDeduction from './StandardizedDeduction';
import ManageDropdownItems from './ManageDropdownItems';
import TaxRates from './TaxRates';

const Adminsettings = () => {
    const [activeTab, setActiveTab] = useState('Tax Rates');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <Backsvg Svg={ic_AdminSetings.icon()} text={'Admin Settings'} />
            <div className={style.MainDivForHederTab}>
                <div
                    className={activeTab === 'Tax Rates' ? style.TextTabDivActivTab : style.TextTabDiv}
                    onClick={() => handleTabClick('Tax Rates')}
                >
                    Tax Rates
                </div>
                <div
                    className={activeTab === 'Standardized Deduction' ? style.TextTabDivActivTab : style.TextTabDiv}
                    onClick={() => handleTabClick('Standardized Deduction')}
                >
                    Standardized Deduction
                </div>
                <div
                    className={activeTab === 'State Tax List' ? style.TextTabDivActivTab : style.TextTabDiv}
                    onClick={() => handleTabClick('State Tax List')}
                >
                    State Tax List
                </div>
                <div
                    className={activeTab === 'Manage Dropdown Items' ? style.TextTabDivActivTab : style.TextTabDiv}
                    onClick={() => handleTabClick('Manage Dropdown Items')}
                >
                    Manage Dropdown Items
                </div>
            </div>
            {activeTab === 'Tax Rates' && <TaxRates />}
            {activeTab === 'Standardized Deduction' && <StandardizedDeduction />}
            {activeTab === 'Manage Dropdown Items' && <ManageDropdownItems />}
        </>
    );
};

export default Adminsettings;