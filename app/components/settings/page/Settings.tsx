import React from "react";

const Settings = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full"
      style={{
        width: '100vh',
        height: '445px',
        top: '168px',
        left: '425px',
        gap: '0px',
        borderRadius: '30px 0px 0px 0px',
        opacity: '0px',
        position: 'absolute'
      }}
    >
      <div className="grid grid-cols-3 gap-6 p-6 w-full h-full">
        {/* Profile Setting */}
        <div
          // className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
          style={{
            width: '415px',
            height: '160px',
            top: '208px',
            left: '465px',
            gap: '0px',
            borderRadius: '20px 0px 0px 0px',
            position: 'absolute',
            flexDirection: "row",
            display: "flex",
          }}
        >
          <img
            src="images/setting/profile setting.png"
            alt="Profile"
            className="mb-4"
            style={{
              width: "100px",
              height: "100px",
              top: '238px',
              left: '495px',
              gap: '0px',
              borderRadius: '200px'
            }}
          />
          <span
            className="text-lg font-semibold"
            style={{
              width: "154px",
              height: "33px",
              top: "271px",
              left: "620px",
              gap: "0px",
              opacity: "0px",
            }}
          >
            Profile Setting
          </span>
        </div>

        {/* Add User */}
        <div
          // className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
          style={{
            width: '415px',
            height: '160px',
            top: '208px',
            left: '925px',
            gap: '0px',
            position: 'absolute',
            flexDirection: "row",
            display: "flex",
          }}
        >
          <img
            src="images/setting/add user.png"
            alt="Add User"
            className="mb-4"
          />
          <span className="text-lg font-semibold">Add User +</span>
        </div>

        {/* Document Setting */}
        <div
          // className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
          style={{
            width: '415px',
            height: '160px',
            top: '208px',
            left: '1385px',
            gap: '0px',
            borderRadius: '20px 0px 0px 0px',
            position: 'absolute',
            flexDirection: "row",
            display: "flex",
          }}
        >
          <img
            src="images/setting/document.png"
            alt="Document Setting"
            className="mb-4"
          />
          <span className="text-lg font-semibold">Document Setting</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
