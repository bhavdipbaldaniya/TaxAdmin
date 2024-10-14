'use client';
import Back from '@/src/Component/Back/page';
import Breadcrumb from '@/src/Component/Breadcrumb/page';
import React, { useState } from 'react';
import style from '../Component/setting.module.css';
import { Label } from '@/src/Component/FormElement/Lable';
import Dropdown from '@/src/Component/FormElement/Dropdown';
import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1';
import InputNum from '@/src/Component/FormElement/InputNum';
import Button from '@/src/Component/FormElement/Button';
import { useRouter } from 'next/navigation';
import Heading3Fonts from '@/src/Typography/text/Heading3Fonts';

const AddStandardizedDeduction = () => {
    const currentYear = new Date().getFullYear();
    const router = useRouter();

    const [selectedYear, setSelectedYear] = useState(currentYear);

    // Array of deduction fields (instead of initializing multiple states manually)
    const [deductionFields, setDeductionFields] = useState([
        {
            fillingStatus: 'Single Filers',
            standardDeduction: '',
            additionalSenior: '',
            additionalBlind: '',
        },
        {
            fillingStatus: 'Married Filing Jointly',
            standardDeduction: '',
            additionalSenior: '',
            additionalBlind: '',
        },
        {
            fillingStatus: 'Married Filing Separately',
            standardDeduction: '',
            additionalSenior: '',
            additionalBlind: '',
        },
        {
            fillingStatus: 'Head of Household',
            standardDeduction: '',
            additionalSenior: '',
            additionalBlind: '',
        },
    ]);

    // Handle field changes dynamically
    const handleFieldChange = (index, field, value) => {
        const updatedFields = [...deductionFields];
        updatedFields[index][field] = value;
        setDeductionFields(updatedFields);
    };

    const handleSave = () => {
        const jsonData = {
            year: selectedYear,
            deductions: deductionFields,
        };
        console.log('Saved JSON Data:', jsonData);
    };

    const yearOptions = Array.from(new Array(50), (val, index) => ({
        name: (currentYear - index).toString(),
        value: currentYear - index,
    }));

    const BackClick = () => {
        router.push('/adminsettings');
    };

    return (
        <>
            <Back onClick={BackClick} text={'Add Standard Deduction Rate'} />
            <Breadcrumb
                paths={[
                    { name: 'Admin Settings', route: '/adminsettings' },
                    { name: 'Add Standard Deduction Rate' },
                ]}
            />
            <div>
                <div className={style.EditMainDivForHederContent}>
                    <div className={style.EditMainDivForYearAndStatus}>
                        <div>
                            <Label className={style.EditLable}>{'Select Year'}</Label>
                            <Dropdown
                                data={yearOptions}
                                value={selectedYear}
                                setValue={setSelectedYear}
                                className={style.DropDownValiue}
                                disable={false}
                            />
                        </div>
                        <span className={style.EditLastModifyDev}>Last modified on 24/02/2023</span>
                    </div>


                </div>

                <div className={style.EditMainDivTaxableIncomeRange}>
                    <div className={style.HedingMainDiv}>
                        <HeadingTextH1 text={'Standard Deduction Rate'} />
                    </div>

                    <div className={style.MainDivForEditSd}>
                        {deductionFields.map((field, index) => (
                            <div key={index} className={style.ManiDivForEditInformationFildSD}>
                                <Heading3Fonts className={style.HadingTextSD} text={field.fillingStatus} />
                                <div>
                                    <div className={style.EditMainDivForInputAndLableSectionSD}>
                                        <div className={style.EditLebulManegeDivSD}>
                                            <Label>{'Standard Deduction'}</Label>
                                            <InputNum
                                                placeholder={'$0.00'}
                                                value={field.standardDeduction}
                                                onChange={(e) => handleFieldChange(index, 'standardDeduction', e.target.value)}
                                            />
                                        </div>
                                        <div className={style.EditLebulManegeDivSD}>
                                            <Label>{'Additional Deduction for Seniors (60+)'}</Label>
                                            <InputNum
                                                placeholder={'$0.00'}
                                                value={field.additionalSenior}
                                                onChange={(e) => handleFieldChange(index, 'additionalSenior', e.target.value)}
                                            />
                                        </div>
                                        <div className={style.EditLebulManegeDivSD}>
                                            <Label>{'Additional Deduction for Blind'}</Label>
                                            <InputNum
                                                placeholder={'$0.00'}
                                                value={field.additionalBlind}
                                                onChange={(e) => handleFieldChange(index, 'additionalBlind', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.MainDivForButtonCancelCreat}>
                    <Button className={style.CancelButton} type={'button'} text={'Cancel'} />
                    <Button type={'button'} text={'Save'} onClick={handleSave} />
                </div>
            </div>
        </>
    );
};

export default AddStandardizedDeduction;