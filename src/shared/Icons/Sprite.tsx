import React from 'react';

export function Sprite() {
  return (
    <svg style={{ display: 'none' }} width="0" height="0" className="hidden">
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedUserIcon">
        <path
          d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z"
          fill="#182233"
        />
        <path
          d="M4 22C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4ZM4 4V20H7C7 17.2386 9.23858 15 12 15C14.7614 15 17 17.2386 17 20H20V4H4ZM15 20C15 18.3431 13.6569 17 12 17C10.3431 17 9 18.3431 9 20H15Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedWarningIcon">
        <path
          d="M21.266 20.9981H2.73301C2.37575 20.9981 2.04563 20.8075 1.867 20.4981C1.68837 20.1887 1.68838 19.8075 1.86701 19.4981L11.133 3.49811C11.3118 3.18923 11.6416 2.99902 11.9985 2.99902C12.3554 2.99902 12.6852 3.18923 12.864 3.49811L22.13 19.4981C22.3085 19.8074 22.3086 20.1883 22.1303 20.4977C21.9519 20.807 21.6221 20.9977 21.265 20.9981H21.266ZM12 5.99811L4.46901 18.9981H19.533L12 5.99811ZM12.995 14.9991H10.995V9.99811H12.995V14.9991Z"
          fill="#182233"
        />
        <path d="M11 16.0001H13V18.0001H11V16.0001Z" fill="#182233"/>
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="warningIcon">
        <path
          d="M21.266 20.9981H2.73301C2.37575 20.9981 2.04563 20.8075 1.867 20.4981C1.68837 20.1887 1.68838 19.8075 1.86701 19.4981L11.133 3.49811C11.3118 3.18923 11.6416 2.99902 11.9985 2.99902C12.3554 2.99902 12.6852 3.18923 12.864 3.49811L22.13 19.4981C22.3085 19.8074 22.3086 20.1883 22.1303 20.4977C21.9519 20.807 21.6221 20.9977 21.265 20.9981H21.266ZM11 15.9981V17.9981H11.933H11.998H12.063H12.998V15.9981H11ZM11 8.99811V13.9981H13V8.99811H11Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="settingsIcon">
        <path
          d="M13.82 22H10.18C9.71009 22 9.30353 21.673 9.20298 21.214L8.79598 19.33C8.25303 19.0921 7.7382 18.7946 7.26098 18.443L5.42398 19.028C4.97598 19.1709 4.48897 18.9823 4.25398 18.575L2.42998 15.424C2.19757 15.0165 2.27764 14.5025 2.62298 14.185L4.04798 12.885C3.98318 12.2961 3.98318 11.7019 4.04798 11.113L2.62298 9.816C2.27713 9.49837 2.19703 8.98372 2.42998 8.576L4.24998 5.423C4.48497 5.0157 4.97198 4.82714 5.41998 4.97L7.25698 5.555C7.50104 5.37416 7.75511 5.20722 8.01798 5.055C8.27032 4.91269 8.53002 4.78385 8.79598 4.669L9.20398 2.787C9.30405 2.32797 9.71017 2.00049 10.18 2H13.82C14.2898 2.00049 14.6959 2.32797 14.796 2.787L15.208 4.67C15.4888 4.79352 15.7622 4.93308 16.027 5.088C16.2743 5.23078 16.5133 5.38736 16.743 5.557L18.581 4.972C19.0287 4.82967 19.5151 5.01816 19.75 5.425L21.57 8.578C21.8024 8.98548 21.7223 9.49951 21.377 9.817L19.952 11.117C20.0168 11.7059 20.0168 12.3001 19.952 12.889L21.377 14.189C21.7223 14.5065 21.8024 15.0205 21.57 15.428L19.75 18.581C19.5151 18.9878 19.0287 19.1763 18.581 19.034L16.743 18.449C16.5104 18.6203 16.2687 18.7789 16.019 18.924C15.7568 19.0759 15.4864 19.2131 15.209 19.335L14.796 21.214C14.6955 21.6726 14.2895 21.9996 13.82 22ZM11.996 8C9.78684 8 7.99598 9.79086 7.99598 12C7.99598 14.2091 9.78684 16 11.996 16C14.2051 16 15.996 14.2091 15.996 12C15.996 9.79086 14.2051 8 11.996 8Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="checkboxСheckedIcon">
        <path
          d="M17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19Z"
          fill="#182233"
        />
        <path
          d="M11 15.2732L8.29999 12.6262L9.69999 11.1962L11 12.4672L14.3 9.2002L15.7 10.6222L11 15.2722V15.2732Z"
          fill="white"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="circleCheckIcon">
        <path
          d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM7.41 11.59L6 13L10 17L18 9.00002L16.59 7.58002L10 14.17L7.41 11.59Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="errorIcon">
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="filterIcon">
        <path
          d="M13.4472 20.9051C13.786 20.7376 14 20.3951 14 20.0204V14.6999C14 14.4376 14.1054 14.186 14.2929 14.0005L20.414 7.94576C20.789 7.57483 21 7.07135 21 6.54611V3.98915C21 3.44215 20.553 3 20 3H4C3.447 3 3 3.44215 3 3.98915V6.54611C3 7.07135 3.211 7.57483 3.586 7.94576L9.70711 14.0005C9.89464 14.186 10 14.4376 10 14.6999V21.0096C10 21.7449 10.7823 22.2231 11.4472 21.8943L13.4472 20.9051Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="helpCircleIcon">
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11 17V19H13V17H11ZM12 7C13.1046 7 14 7.89543 14 9C14.0035 9.53073 13.7904 10.0399 13.41 10.41L12.17 11.67C11.4214 12.4217 11.0008 13.4391 11 14.5V15H13C12.9223 13.925 13.3559 12.8763 14.17 12.17L15.07 11.25C15.6681 10.6543 16.003 9.84411 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9H10C10 7.89543 10.8954 7 12 7Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="homeIcon">
        <path
          d="M2 12.9998L11.293 3.70685C11.6835 3.31647 12.3165 3.31647 12.707 3.70685L22 12.9998H20V20.9998C20 21.5521 19.5523 21.9998 19 21.9998H14V14.9998H10V21.9998H5C4.44772 21.9998 4 21.5521 4 20.9998V12.9998H2Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="nearMeIcon">
        <g clipPath="url(#clip0_1_1152)">
          <path d="M3 3L21 10.53V11.51L14.16 14.16L11.52 21H10.54L3 3Z" fill="#182233"/>
        </g>
        <defs>
          <clipPath id="clip0_1_1152">
            <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/>
          </clipPath>
        </defs>
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedAlarmIcon">
        <path
          d="M11.999 22C7.05569 21.9349 3.06417 17.9433 2.99902 13C3.06417 8.05669 7.05569 4.06517 11.999 4.00002C16.9423 4.06517 20.9339 8.05669 20.999 13C20.9339 17.9433 16.9423 21.9349 11.999 22ZM11.999 6.00002C8.15418 6.05063 5.04963 9.15518 4.99902 13C5.04963 16.8448 8.15418 19.9494 11.999 20C15.8438 19.9494 18.9484 16.8448 18.999 13C18.9484 9.15518 15.8438 6.05063 11.999 6.00002ZM16.999 14H10.999V8.00002H12.999V12H16.999V14ZM20.291 6.70802L17.282 3.70802L18.691 2.29102L21.701 5.29102L20.291 6.70702V6.70802ZM3.70602 6.70802L2.29102 5.29102L5.28202 2.29102L6.69702 3.70802L3.70802 6.70802H3.70602Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="notificationIcon">
        <path
          d="M12 22C10.896 21.9946 10.0009 21.1039 9.99 20H13.99C13.9921 20.2674 13.9411 20.5325 13.84 20.78C13.5777 21.382 13.0418 21.8211 12.4 21.96H12.395H12.38H12.362H12.353C12.2368 21.9842 12.1186 21.9976 12 22ZM20 19H4V17L6 16V10.5C5.94732 9.08912 6.26594 7.68913 6.924 6.44C7.57904 5.28151 8.6987 4.45888 10 4.18V2H14V4.18C16.579 4.794 18 7.038 18 10.5V16L20 17V19Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedArrowIcon">
        <path
          d="M11 16.17L7.41 12.59L6 14L12 20L18 14L16.59 12.59L13 16.17V4H11V16.17Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedCalendarIcon">
        <path
          d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedCheckboxIcon">
        <path
          d="M17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19ZM7 7V17H17V7H7Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedCheckboxCheckedIcon">
        <path
          d="M17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19ZM7 7V17H17V7H7ZM11 15.362L8.3 12.715L9.7 11.285L11 12.556L14.3 9.289L15.7 10.711L11 15.361V15.362Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedCheckboxSquareIcon">
        <path
          d="M17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19ZM7 7V17H17V7H7ZM15 15H9V9H15V15Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedCircleCheckIcon">
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedCloseIcon">
        <path
          d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedCheckIcon">
        <g clipPath="url(#clip0_1_1137)">
          <path
            d="M8.99997 16.1698L4.82997 11.9998L3.40997 13.4098L8.99997 18.9998L21 6.99984L19.59 5.58984L8.99997 16.1698Z"
            fill="#182233"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1137">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedErrorIcon">
        <path
          d="M11.99 22C6.46846 21.9945 1.99632 17.5149 2 11.9933C2.00368 6.47179 6.48179 1.99816 12.0033 2C17.5249 2.00184 22 6.47845 22 12C21.9967 17.5254 17.5154 22.0022 11.99 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.6845 16.444 4.10977 12.0425 4.08599C7.64111 4.06245 4.04732 7.59876 4 12V12.172ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedFilterIcon">
        <path
          d="M20 3H4C3.447 3 3 3.447 3 4V6.59C3 7.113 3.213 7.627 3.583 7.997L9 13.414V21C9 21.347 9.18 21.668 9.475 21.851C9.635 21.95 9.817 22 10 22C10.153 22 10.306 21.965 10.447 21.895L14.447 19.895C14.786 19.725 15 19.379 15 19V13.414L20.417 7.997C20.787 7.627 21 7.113 21 6.59V4C21 3.447 20.553 3 20 3ZM13.293 12.293C13.105 12.48 13 12.734 13 13V18.382L11 19.382V13C11 12.734 10.895 12.48 10.707 12.293L5 6.59V5H19.001L19.003 6.583L13.293 12.293Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedHelpCircleIcon">
        <path
          d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57931 16.4087 4.00002 11.992 4.00002C7.57528 4.00002 3.99421 7.57931 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM13 18H11V16H13V18ZM13 15H11C10.9684 13.6977 11.6461 12.4808 12.77 11.822C13.43 11.316 14 10.88 14 10C14 8.89545 13.1046 8.00002 12 8.00002C10.8954 8.00002 10 8.89545 10 10H8V9.91002C8.01608 8.48096 8.79333 7.16902 10.039 6.46842C11.2846 5.76781 12.8094 5.78496 14.039 6.51342C15.2685 7.24187 16.0161 8.57096 16 10C15.9284 11.079 15.3497 12.0603 14.44 12.645C13.6177 13.1612 13.0847 14.0328 13 15Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedHomeIcon">
        <path
          d="M19 21.9999H5C4.44772 21.9999 4 21.5521 4 20.9999V12.9999H2L11.292 3.70686C11.4796 3.51908 11.7341 3.41357 11.9995 3.41357C12.2649 3.41357 12.5194 3.51908 12.707 3.70686L22 12.9999H20V20.9999C20 21.5521 19.5523 21.9999 19 21.9999ZM10 14.9999H14V19.9999H18V11.8279L12 5.82786L6 11.8279V19.9999H10V14.9999Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedSettingsIcon">
        <path
          d="M13.82 22H10.18C9.71009 22 9.30353 21.673 9.20298 21.214L8.79598 19.33C8.25303 19.0921 7.7382 18.7946 7.26098 18.443L5.42398 19.028C4.97598 19.1709 4.48897 18.9823 4.25398 18.575L2.42998 15.424C2.19757 15.0165 2.27764 14.5025 2.62298 14.185L4.04798 12.885C3.98318 12.2961 3.98318 11.7019 4.04798 11.113L2.62298 9.816C2.27713 9.49837 2.19703 8.98372 2.42998 8.576L4.24998 5.423C4.48497 5.0157 4.97198 4.82714 5.41998 4.97L7.25698 5.555C7.50104 5.37416 7.75511 5.20722 8.01798 5.055C8.27032 4.91269 8.53002 4.78385 8.79598 4.669L9.20398 2.787C9.30405 2.32797 9.71017 2.00049 10.18 2H13.82C14.2898 2.00049 14.6959 2.32797 14.796 2.787L15.208 4.67C15.4888 4.79352 15.7622 4.93308 16.027 5.088C16.2739 5.23081 16.5126 5.38739 16.742 5.557L18.58 4.972C19.0277 4.82967 19.5141 5.01816 19.749 5.425L21.569 8.578C21.8014 8.98548 21.7213 9.49951 21.376 9.817L19.951 11.117C20.0158 11.7059 20.0158 12.3001 19.951 12.889L21.376 14.189C21.7213 14.5065 21.8014 15.0205 21.569 15.428L19.749 18.581C19.5141 18.9878 19.0277 19.1763 18.58 19.034L16.742 18.449C16.5094 18.6203 16.2677 18.7789 16.018 18.924C15.7558 19.0759 15.4854 19.2131 15.208 19.335L14.796 21.214C14.6955 21.6726 14.2895 21.9996 13.82 22ZM7.61998 16.229L8.43998 16.829C8.62483 16.9652 8.81749 17.0904 9.01698 17.204C9.20468 17.3127 9.39795 17.4115 9.59598 17.5L10.529 17.909L10.986 20H13.016L13.473 17.908L14.406 17.499C14.8133 17.3194 15.1999 17.0961 15.559 16.833L16.38 16.233L18.421 16.883L19.436 15.125L17.853 13.682L17.965 12.67C18.0142 12.2274 18.0142 11.7806 17.965 11.338L17.853 10.326L19.437 8.88L18.421 7.121L16.38 7.771L15.559 7.171C15.1998 6.90671 14.8132 6.68175 14.406 6.5L13.473 6.091L13.016 4H10.986L10.527 6.092L9.59598 6.5C9.39779 6.58704 9.2045 6.68486 9.01698 6.793C8.81872 6.90633 8.62707 7.03086 8.44298 7.166L7.62198 7.766L5.58198 7.116L4.56498 8.88L6.14798 10.321L6.03598 11.334C5.98678 11.7766 5.98678 12.2234 6.03598 12.666L6.14798 13.678L4.56498 15.121L5.57998 16.879L7.61998 16.229ZM11.996 16C9.78684 16 7.99598 14.2091 7.99598 12C7.99598 9.79086 9.78684 8 11.996 8C14.2051 8 15.996 9.79086 15.996 12C15.9932 14.208 14.204 15.9972 11.996 16ZM11.996 10C10.9034 10.0011 10.0139 10.8788 9.99821 11.9713C9.98255 13.0638 10.8465 13.9667 11.9387 13.9991C13.0308 14.0315 13.9468 13.1815 13.996 12.09V12.49V12C13.996 10.8954 13.1005 10 11.996 10Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedSliderIcon">
        <path
          d="M7 21H5V19H2V17H5V15H7V21ZM22 19H9V17H22V19ZM17 15H15V13H2V11H15V9.012H17V15ZM22 13H19V11H22V13ZM11 9H9V7H2V5H9V3H11V9ZM22 7H13V5H22V7Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedMessageIcon">
        <path d="M9 9H7V11H9V9Z" fill="#182233"/>
        <path d="M11 9H13V11H11V9Z" fill="#182233"/>
        <path d="M17 9H15V11H17V9Z" fill="#182233"/>
        <path
          d="M3 5V21L7.8 17.4C8.14582 17.1396 8.56713 16.9992 9 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5ZM5 17V5H19V15H8.334C7.90107 14.9988 7.47964 15.1393 7.134 15.4L5 17Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedTrashIcon">
        <path
          d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9ZM15 18H13V9H15V18ZM11 18H9V9H11V18Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 22" id="sortingArrowDownIcon">
        <path
          d="M7.9519 8.5L12.9519 13.5L17.9519 8.5L7.9519 8.5Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 22" id="sortingArrowUpIcon">
        <path
          d="M17.9519 13.5L12.9519 8.5L7.9519 13.5L17.9519 13.5Z"
          fill="#182233"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" id="arrowDownRedIcon">
        <path
          d="M0 0L10 10L20 0H0Z"
          fill="#FD4E5D"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" id="arrowUpGreenIcon">
        <path
          d="M20 10L10 0L0 10L20 10Z"
          fill="#76CA66"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outlinedGreenPlusIcon">
        <path
          d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12"
          stroke="#76CA66"
          strokeWidth="2"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="outlinedRubleIcon">
        <path
          d="M19,4H10V15H7v2h3v3H7v2h3v6h2V22h9V20H12V17h7a6.0067,6.0067,0,0,0,6-6V10A6.0067,6.0067,0,0,0,19,4Zm4,7a4.0045,4.0045,0,0,1-4,4H12V6h7a4.0045,4.0045,0,0,1,4,4Z"
          fill="black"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="outlinedGreenRubleIcon">
        <path
          d="M19,4H10V15H7v2h3v3H7v2h3v6h2V22h9V20H12V17h7a6.0067,6.0067,0,0,0,6-6V10A6.0067,6.0067,0,0,0,19,4Zm4,7a4.0045,4.0045,0,0,1-4,4H12V6h7a4.0045,4.0045,0,0,1,4,4Z"
          fill="#76CA66"
        />
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="outlinedRedRubleIcon">
        <path
          d="M19,4H10V15H7v2h3v3H7v2h3v6h2V22h9V20H12V17h7a6.0067,6.0067,0,0,0,6-6V10A6.0067,6.0067,0,0,0,19,4Zm4,7a4.0045,4.0045,0,0,1-4,4H12V6h7a4.0045,4.0045,0,0,1,4,4Z"
          fill="#FD4E5D"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" id="minusIcon">
        <path
          d="M68 50.5H24c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h44c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5z"
          fill="#FD4E5D"
        />
      </symbol>
    </svg>
  );
}
