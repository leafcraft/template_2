import React from "react";

const Icons = (props: { variant?: any; Link?: any }) => {
  switch (props.variant) {
    case "Search":
      return (
        <a href={props.Link} target="_blank">
          {" "}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1538_8890)">
              <path d="M26.7807 25.4297L20.4555 19.1017C22.0683 17.1795 23.0483 14.7015 23.0483 11.9939C23.0483 5.88845 18.0993 0.939453 11.9939 0.939453C5.88845 0.939453 0.939453 5.88845 0.939453 11.9939C0.939453 18.0993 5.88845 23.0483 11.9939 23.0483C14.7015 23.0483 17.1809 22.0711 19.1031 20.4541L25.4311 26.7807C25.8035 27.1559 26.4097 27.1559 26.7821 26.7807C27.1545 26.4083 27.1545 25.8035 26.7807 25.4297ZM11.9428 21.35C6.80106 21.35 2.63206 17.1814 2.63206 12.04C2.63206 6.89873 6.80106 2.73005 11.9428 2.73005C17.0845 2.73005 21.2521 6.89873 21.2521 12.04C21.2521 17.1814 17.0845 21.35 11.9428 21.35Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_1538_8890">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      );
      break;
    case "cart":
      return (
        <a href={props.Link} target="_blank">
          {" "}
          <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4H37V40H1V4Z" stroke="#2B2D3C" stroke-width="2" />
            <path d="M22.1377 6.23047V7.74805C22.1377 8.5638 22.0648 9.25195 21.9189 9.8125C21.7731 10.373 21.5635 10.8242 21.29 11.166C21.0166 11.5078 20.6862 11.7562 20.2988 11.9111C19.916 12.0615 19.4831 12.1367 19 12.1367C18.6172 12.1367 18.264 12.0889 17.9404 11.9932C17.6169 11.8975 17.3252 11.7448 17.0654 11.5352C16.8102 11.321 16.5915 11.043 16.4092 10.7012C16.2269 10.3594 16.0879 9.94466 15.9922 9.45703C15.8965 8.9694 15.8486 8.39974 15.8486 7.74805V6.23047C15.8486 5.41471 15.9215 4.73112 16.0674 4.17969C16.2178 3.62826 16.4297 3.1862 16.7031 2.85352C16.9766 2.51628 17.3047 2.27474 17.6875 2.12891C18.0749 1.98307 18.5078 1.91016 18.9863 1.91016C19.3737 1.91016 19.7292 1.95801 20.0527 2.05371C20.3809 2.14486 20.6725 2.29297 20.9277 2.49805C21.1829 2.69857 21.3994 2.96745 21.5771 3.30469C21.7594 3.63737 21.8984 4.04525 21.9941 4.52832C22.0898 5.01139 22.1377 5.57878 22.1377 6.23047ZM20.8662 7.95312V6.01855C20.8662 5.57194 20.8389 5.18001 20.7842 4.84277C20.734 4.50098 20.6589 4.20931 20.5586 3.96777C20.4583 3.72624 20.3307 3.53027 20.1758 3.37988C20.0254 3.22949 19.8499 3.12012 19.6494 3.05176C19.4535 2.97884 19.2324 2.94238 18.9863 2.94238C18.6855 2.94238 18.4189 2.99935 18.1865 3.11328C17.9541 3.22266 17.7581 3.39811 17.5986 3.63965C17.4437 3.88118 17.3252 4.19792 17.2432 4.58984C17.1611 4.98177 17.1201 5.45801 17.1201 6.01855V7.95312C17.1201 8.39974 17.1452 8.79395 17.1953 9.13574C17.25 9.47754 17.3298 9.77376 17.4346 10.0244C17.5394 10.2705 17.667 10.4733 17.8174 10.6328C17.9678 10.7923 18.141 10.9108 18.3369 10.9883C18.5374 11.0612 18.7585 11.0977 19 11.0977C19.3099 11.0977 19.5811 11.0384 19.8135 10.9199C20.0459 10.8014 20.2396 10.6169 20.3945 10.3662C20.554 10.111 20.6725 9.78516 20.75 9.38867C20.8275 8.98763 20.8662 8.50911 20.8662 7.95312Z" fill="#2B2D3C" />
          </svg>

        </a>
      );
      break;
    case "leftArrow":
      return (
        <a href={props.Link} target="_blank">
          {" "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7174 1.67261C16.5543 1.69413 16.4034 1.77089 16.2899 1.89011L6.68994 11.4901C6.55667 11.6249 6.48193 11.8068 6.48193 11.9964C6.48193 12.1859 6.55667 12.3678 6.68994 12.5026L16.2899 22.1026C16.3547 22.1768 16.4339 22.2368 16.5228 22.2792C16.6117 22.3215 16.7083 22.3451 16.8067 22.3486C16.905 22.3521 17.0031 22.3354 17.0948 22.2995C17.1864 22.2637 17.2698 22.2094 17.3396 22.14C17.4095 22.0707 17.4644 21.9878 17.5009 21.8964C17.5375 21.805 17.5549 21.707 17.5521 21.6087C17.5493 21.5103 17.5264 21.4135 17.4848 21.3243C17.4431 21.2351 17.3836 21.1554 17.3099 21.0901L8.21994 12.0001L17.3099 2.90261C17.418 2.79729 17.4902 2.66069 17.5164 2.51212C17.5426 2.36354 17.5214 2.21049 17.456 2.07457C17.3905 1.93865 17.284 1.82672 17.1515 1.7546C17.0189 1.68248 16.8671 1.6538 16.7174 1.67261Z" fill="black"/>
</svg>



        </a>
      );
      break;
    case "rightArrow":
      return (
        <a href={props.Link} target="_blank">
          {" "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.28256 22.3274C7.44573 22.3059 7.59661 22.2291 7.71006 22.1099L17.3101 12.5099C17.4433 12.3751 17.5181 12.1932 17.5181 12.0036C17.5181 11.8141 17.4433 11.6322 17.3101 11.4974L7.71006 1.89739C7.64532 1.82324 7.56606 1.76316 7.47718 1.72085C7.38831 1.67853 7.2917 1.65489 7.19333 1.65139C7.09495 1.64788 6.99691 1.66458 6.90524 1.70045C6.81358 1.73632 6.73024 1.79061 6.66038 1.85996C6.59052 1.9293 6.53562 2.01224 6.49907 2.10364C6.46252 2.19503 6.4451 2.29295 6.44788 2.39135C6.45066 2.48974 6.47359 2.58652 6.51524 2.67571C6.5569 2.7649 6.6164 2.8446 6.69006 2.90989L15.7801 11.9999L6.69006 21.0974C6.58205 21.2027 6.50984 21.3393 6.48364 21.4879C6.45744 21.6365 6.47857 21.7895 6.54404 21.9254C6.60951 22.0614 6.71603 22.1733 6.84854 22.2454C6.98105 22.3175 7.13287 22.3462 7.28256 22.3274Z" fill="black"/>
</svg>



        </a>
      );
      break;
    default:
      return (
        <>
          <div className="w-7 h-7"></div>
        </>
      );

      break;
  }
};

export default Icons;
