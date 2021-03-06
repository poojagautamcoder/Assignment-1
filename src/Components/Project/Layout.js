import React from "react";
import "./Layout.css";
function Layout() {
  return (
    <div className="row">
      <div className="wrapper">
        {/* ///////////////////////1st starts here/////////////////////////////// */}
        <div className="profile-card">
          <img
            height={300}
            width="100%"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAM1BMVEXMzMyWlpaTk5PPz8/Kysq9vb2qqqqXl5ednZ3AwMDLy8ucnJy8vLyioqKzs7Onp6e1tbWaDrkrAAAEIElEQVR4nO2ZiY6cMAxAIQnXAAP//7WNnRNmtpqVttKmek+qBgJ2sfEVtusAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADawFakpfiv++L8A6V/k/6+ul+BO8bCIit223szjY9yy7gas2+fG2eP0V2k+33I0nZQ9e6t5G/GmYrTL9in6T1mTra4NSw8P3bVYsy03KTPKJ3Ur825yvkHFyfp44t5QzjszR5usLvR8958GlV29QLJEV7aqPQQzpekfv5pS/413lPrdp7b6B9/tMFMHxCjt2XTGzZ/dHTL1PfrZxrtaUoAyvEYpHWlUn82Vqu8p2Yp5ru3QOJgCDY8vG27ll5/oY/mDx9pfIgzUq7JcUg5DVgJKfWiX59b9FSIHHnJ9vCx5T1m5a2L51yMNeddd3xim3olJao4RqVTxEa1elNrlco5eeJd330IAs2TLaZf+rVziZQuzhbx96bPx2CuQVk6qs1ahpzdjZGSooROXMl5o8GW77fHPK8+SNzsfy8Wa9SkmSBHZsxhVa9JvXyrmf4exCKtUsUCF/Km2JpLjQpI75+c3czdYultux02dV92r6iRdpiyUCPvo2T+bXgDwnPn4OqMmlJsffWUr0ZHPSrphV3rnB88UigZW0kX9X0MrsbYcmPLpliNjWCrXLg1P+cbvx8eZIJwZZrvrM4U1idZ8NScPHXePGWn9ppfF159rNZLGnQqT4VSfxsT5Hw6TRkxA2HodH3x1HT31Nmwp3L1eO+pXq+8DFQyKt2KVBo6l8pT/f8UU1tp2Zc6tdd16qzrlKDbnumiyIUVu1Qt74s6NbVYp7S/xWJT9z6t6OnataKr2H6r5uHmpx/Q1KuP2PtsvNIvVfQ+2ux9c3m/pY1X85SGRxoXClNJ2oCmqon7bYnSMmMcYdOcxzV3l22CODoFUlbE/V9uizmREuHzycV54bNDRD2VUjaX9rTfy/WwKaoylSt4TrZUWdy9sEhN2q9rMrkr/t5eR/da+kjbyu5dLrfA5anDMGCr/h53bPcgkMSa3Xt7S+Gzwb82bcDDW6mGj6aQ9zzlJHoY2eCWb0zqR2/k3F9GJxs8pxXuJYlKTYsfFh5FWvbPD/Vce2VKzF3znK3lZ91N8Z4U7n01l9HJHWva95n9uIdVVf1dkM5dUl6BV9/XL6cZJL/qT7WxLJulfGPS8726R9ZkpyiOeP3CV/fJ4S6d1A/NhVRnfWO/jMujdPo5Ocon2ip9f6xlFhkFFvWJ542nTPJUki7/gapfl/Yc1XXP5/M6QLpluBhi/bm7WPYYhkG/a7rNH73k0TY+y1/B7tIv6tvh9bvlT6j8YY0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN/kD83LHXnttBnhAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
        <div className="profile-text">
          <p className="text2">Project Name</p>
          <p className="text-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{" "}
          </p>
        </div>
        {/* ///////////////////////1st Ends Here/////////////////////////////// */}
      </div>
    </div>
  );
}
export default Layout;
