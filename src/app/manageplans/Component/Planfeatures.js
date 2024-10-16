"use client";
import React, { useState } from "react";
import Back from "@/src/Component/Back/page";
import HeadingTextH1 from "@/src/Typography/text/HeadingTextH1";
import { Label } from "@/src/Component/FormElement/Lable";
import Input from "@/src/Component/FormElement/Input";
import InputNum from "@/src/Component/FormElement/InputNum";
import Dropdown from "@/src/Component/FormElement/Dropdown";
import ToggleOption from "@/src/Component/FormElement/ToggleOption";
import style from "./manageplans.module.css";
import Button from "@/src/Component/FormElement/Button";
import { ic_Delete } from "@/src/Utils/svg";
import Breadcrumb from "@/src/Component/Breadcrumb/page";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import ErrorText from "@/src/Typography/text/ErrorText";

const PlanFeatures = () => {
  const router = useRouter();
  const options = [
    { label: "Monthly", value: "Monthly" },
    { label: "Yearly", value: "Yearly" },
  ];
  const months = [
    { name: "01", value: "01" },
    { name: "02", value: "02" },
    { name: "03", value: "03" },
    { name: "04", value: "04" },
    { name: "05", value: "05" },
    { name: "06", value: "06" },
    { name: "07", value: "07" },
    { name: "08", value: "08" },
    { name: "09", value: "09" },
    { name: "10", value: "10" },
    { name: "11", value: "11" },
    { name: "12", value: "12" },
  ];
  //   const [planTitle, setPlanTitle] = useState("");
  //   const [planAmount, setPlanAmount] = useState("");
  const [planDescription, setPlanDescription] = useState("");
  const [planDuration, setPlanDuration] = useState("");
  const [planType, setPlanType] = useState(options[0].value);
  const [features, setFeatures] = useState([
    { label: "Feature 1", placeholder: "Basic Tax Optimization", value: "" },
  ]);

  // const handleAddFeature = () => {
  //   if (features[features.length - 1].value.trim() !== "") {
  //     setFeatures((prev) => [
  //       ...prev,
  //       {
  //         label: `Feature ${prev.length + 1}`,
  //         placeholder: "New Feature Description",
  //         value: "",
  //       },
  //     ]);
  //   } else {
  //     alert("Please fill out the current feature before adding a new one.");
  //   }
  // };

  const handleAddFeature = () => {
    if (values.features[values.features.length - 1]?.trim() !== "") {
      formik.setFieldValue("features", [...values.features, ""]);
    } else {
      alert("Please fill out the current feature before adding a new one.");
    }
  };

  const PlanFeaturesValidation = Yup.object({
    planTitle: Yup.string().required("Please enter the plan title."),
    planAmount: Yup.string().required("Please enter the plan amount."),
    planDescription: Yup.string().required("Plan description is required."),
    planDuration: Yup.string().required("Please select the plan duration."),
    planType: Yup.string().required("Please select the plan type."),
    features: Yup.array()
      .of(Yup.string().required("Each feature description is required."))
      .min(1, "At least one feature must be added."),
  });

  const PlanFeaturesInitialValue = {
    planTitle: "",
    planAmount: "",
    planDescription: "",
    planDuration: "",
    planType: options[0].value,
    features: [""],
  };

  const formik = useFormik({
    initialValues: PlanFeaturesInitialValue,
    validationSchema: PlanFeaturesValidation,
    onSubmit: async (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    formik;

  // const handleDeleteFeature = (indexToDelete) => {
  //   if (features.length > 1) {
  //     const updatedFeatures = features.filter(
  //       (_, index) => index !== indexToDelete
  //     );

  //     const reLabeledFeatures = updatedFeatures.map((feature, index) => ({
  //       ...feature,
  //       label: `Feature ${index + 1}`,
  //     }));

  //     setFeatures(reLabeledFeatures);
  //   }
  // };
  const handleDeleteFeature = (indexToDelete) => {
    if (values.features.length > 1) {
      const updatedFeatures = values.features.filter(
        (_, index) => index !== indexToDelete
      );
      formik.setFieldValue("features", updatedFeatures);
    }
  };

  const handleInputChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index].value = value;
    setFeatures(updatedFeatures);
  };

  // const handleCreatePlan = () => {
  //   const planData = {
  //     //   title: planTitle,
  //     //   amount: planAmount,
  //     //   description: planDescription,
  //     duration: planDuration,
  //     type: planType,
  //     features: features.map((f) => f.value),
  //   };

  //   console.log(JSON.stringify(planData, null, 2));
  // };

  const handleCreatePlan = () => {
    const planData = {
      title: values.planTitle,
      amount: values.planAmount,
      description: values.planDescription,
      duration: values.planDuration,
      type: values.planType,
      features: values.features,
    };

    console.log(JSON.stringify(planData, null, 2));
  };

  const handleResetForm = () => {
    setPlanTitle("");
    setPlanAmount("");
    setPlanDescription("");
    setPlanDuration("");
    setPlanType(options[0].value);
    setFeatures([
      { label: "Feature 1", placeholder: "Basic Tax Optimization", value: "" },
    ]);
  };

  const BackClick = () => {
    router.push("/manageplans");
  };

  return (
    <>
      <Back text={"Add New Plans"} onClick={() => BackClick()} />
      <Breadcrumb
        paths={[
          { name: "Manage Plans", route: "/manageplans" },
          { name: "Add New Plan" },
        ]}
      />
      <div>
        <form onSubmit={handleSubmit}>
          <div className={style.MainDivForPlanInformation}>
            <div className={style.HedingMainDiv}>
              <HeadingTextH1 text={"Plan Information"} />
            </div>
            <div className={style.ManiDivForPlanInformationFild}>
              <div className={style.MainDivForPlanTitle}>
                <div className={style.ManageWidthPlanTitle}>
                  <Label for={"planTitle"}>{"Plan Title"}</Label>
                  <Input
                    placeholder={"Eg: Premium"}
                    name={"planTitle"}
                    // value={planTitle}
                    // onChange={(e) => setPlanTitle(e.target.value)}
                    value={values.planTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.planTitle && touched.planTitle && (
                    <ErrorText text={errors.planTitle} />
                  )}
                </div>
                <div className={style.ManageWidthPlanTitle}>
                  <Label>{"Plan Amount"}</Label>
                  <InputNum
                    placeholder={"Eg: $24K"}
                    name={"planAmount"}
                    // value={planAmount}
                    // onChange={(e) => setPlanAmount(e.target.value)}
                    value={values.planAmount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.planAmount && touched.planAmount && (
                    <ErrorText text={errors.planAmount} />
                  )}
                </div>
              </div>
              <div className={style.MainDivForDescriptionPlan}>
                <Label>{"Plan Description"}</Label>
                <Input
                  placeholder={"Eg. This is the best plan for professional CA"}
                  name={"planDescription"}
                  //   value={planDescription}
                  //   onChange={(e) => setPlanDescription(e.target.value)}

                  value={values.planDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.planDescription && touched.planDescription && (
                  <ErrorText text={errors.planDescription} />
                )}
              </div>
              <div className={style.MainDivForPlanType}>
                <div>
                  <Label>{"Plan Type"}</Label>
                  <ToggleOption
                    options={options}
                    // value={planType}
                    // onChange={setPlanType}
                    value={values.planType}
                    name="planType"
                    onChange={(val) => formik.setFieldValue("planType", val)}
                  />
                  {errors.planType && touched.planType && (
                    <ErrorText text={errors.planType} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={style.MainDivForPlanFeatures}>
            <div className={style.HedingMainDiv}>
              <HeadingTextH1 text={"Plan Features"} />
            </div>
            <div className={style.ManiDivForPlanInformationFild}>
              {features.map((feature, index) => (
                <div key={index} className={style.MainDivForfeatureAndDelete}>
                  <div className={style.MainDivForFeturshOption}>
                    <Label>{feature.label}</Label>
                    <Input
                      placeholder={feature.placeholder}
                      //   value={feature.value}
                      //   onChange={(e) => handleInputChange(index, e.target.value)}
                      name={`features[${index}]`}
                      value={values.features[index] || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.features &&
                      touched.features &&
                      errors.features[index] && (
                        <ErrorText text={errors.features[index]} />
                      )}
                  </div>
                  {features.length > 1 && (
                    <div
                      className={style.DeleteButton}
                      onClick={() => handleDeleteFeature(index)}
                    >
                      {ic_Delete.icon()}
                    </div>
                  )}
                </div>
              ))}
              <Button
                className={style.AddIncomeBtm}
                type={"button"}
                text={"+ Add more"}
                onClick={handleAddFeature}
              />
            </div>
          </div>

          <div className={style.MainDivForButtonCancelCreat}>
            <Button
              className={style.CancelButton}
              type={"button"}
              text={"Cancel"}
              onClick={handleResetForm}
            />
            <Button
              type={"submit"}
              text={"Create Plan"}
            // onClick={handleCreatePlan}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PlanFeatures;
