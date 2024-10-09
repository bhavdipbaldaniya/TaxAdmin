"use client";
import React, { useState } from "react";
import style from "./Dashboard.module.css";
import Heading2Fonts from "@/src/Typography/text/Heading2Fonts";
import CaptionFont from "@/src/Typography/text/CaptionFont";
import DisplayFont from "@/src/Typography/text/DisplayFont";
import { ic_Total_Customers, ic_TotalPlans, ic_TotalProFormaCreated, ic_TotalRevenue, ic_TotalRevenue_Progresh } from "@/src/Utils/svg";
import AnalyticsDashboard from "./Chart";
function Dashboard() {

  return (
    <>
      <Heading2Fonts text={"Dashboard"} />
      <div>
        <div className={style.MainDivForCartSection}>
          <div className={style.MainDivForCart}>
            <div className={style.MainDivForTotleRevenue}>
              <div className={style.mainDivForRevenueSvg} >
                <div className={style.mainDivForSvg}>{ic_TotalRevenue.icon()}</div>
                <CaptionFont text={'Total Revenue'} />
              </div>
              <div className={style.ParsetegeManageMainDiv}>
                <span className={style.ParsetegeManage}>12%</span>
                <span className={style.ProgreshSvg}>{ic_TotalRevenue_Progresh.icon()}</span>
              </div>

            </div>
            <div className={style.mainDivForNumberValue}>
              <DisplayFont text={'$ 24,566'} />
              <div className={style.inlastMonthText}>in last month</div>
            </div>
          </div>
          <div className={style.MainDivForCart}>
            <div className={style.MainDivForTotleRevenue}>
              <div className={style.mainDivForRevenueSvg} >
                <div className={style.mainDivForSvg1}>{ic_Total_Customers.icon()}</div>
                <CaptionFont text={'Total Customers '} />
              </div>
              <div className={style.ParsetegeManageMainDiv}>
                <span className={style.ParsetegeManage}>12%</span>
                <span className={style.ProgreshSvg}>{ic_TotalRevenue_Progresh.icon()}</span>
              </div>

            </div>
            <div className={style.mainDivForNumberValue}>
              <DisplayFont text={'2,234'} />
              <div className={style.inlastMonthText}>in last month</div>
            </div>
          </div>
          <div className={style.MainDivForCart}>
            <div className={style.MainDivForTotleRevenue}>
              <div className={style.mainDivForRevenueSvg} >
                <div className={style.mainDivForSvg2}>{ic_TotalProFormaCreated.icon()}</div>
                <CaptionFont text={'Total Pro Forma Created'} />
              </div>
              <div className={style.ParsetegeManageMainDiv}>
                <span className={style.ParsetegeManage}>12%</span>
                <span className={style.ProgreshSvg}>{ic_TotalRevenue_Progresh.icon()}</span>
              </div>

            </div>
            <div className={style.mainDivForNumberValue}>
              <DisplayFont text={'254'} />
              <div className={style.inlastMonthText}>in last month</div>
            </div>
          </div>
          <div className={style.MainDivForCart}>
            <div className={style.MainDivForTotleRevenue}>
              <div className={style.mainDivForRevenueSvg} >
                <div className={style.mainDivForSvg2}>{ic_TotalPlans.icon()}</div>
                <CaptionFont text={'Total Plans'} />
              </div>
              <div className={style.ParsetegeManageMainDiv}>
                <span className={style.ParsetegeManage}>12%</span>
                <span className={style.ProgreshSvg}>{ic_TotalRevenue_Progresh.icon()}</span>
              </div>

            </div>
            <div className={style.mainDivForNumberValue}>
              <DisplayFont text={'04'} />
              <div className={style.GoToManagePlans}>Go to Manage Plans</div>
            </div>
          </div>
        </div>
        <div className={style.BarGraphMainDiv}>
          <AnalyticsDashboard />
        </div>
      </div>

    </>
  );
}

export default Dashboard;


