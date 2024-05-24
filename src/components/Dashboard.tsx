import React, { useEffect, useState } from "react";
import { Card, Space } from "antd";
import Icon, {
  HomeOutlined,
  ApiOutlined,
  ToTopOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { useGlobalContext } from "contexts/Global";

interface DashboardSvgProps {
  option: string;
}

const LightoffSvg: React.FC<DashboardSvgProps> = ({option}) => (
  <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
          <path
              d="M9 18H15"
              stroke={option}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          <path
              d="M10 21H14"
              stroke={option}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          <path
              d="M16.4999 11.5C17.4997 10.5 17.9765 9.48689 17.9999 8C18.0479 4.95029 16 3 11.9999 3C10.8324 3 9.83119 3.16613 8.99988 3.47724"
              stroke={option}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          <path
              d="M8.99985 15C9 13 8.5 12.5 7.49985 11.5C6.4997 10.5 6.02324 9.48689 5.99985 8C5.99142 7.46458 6.0476 6.96304 6.1676 6.5"
              stroke={option}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          <path
              d="M3 3L21 21"
              stroke="red"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
      </g>
  </svg>
);


const TotalgatewaySvg: React.FC<DashboardSvgProps> = ({option}) => (
  <svg
      width="46px"
      height="46px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
          <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM13.0312 6.96875H13V4H11V6.96875H10.9688H8.96875L10.1687 8.56875L11.2 9.94375L12 11.0104L12.8 9.94375L13.8313 8.56875L15.0312 6.96875H13.0312ZM12 12.9974L11.2 14.0641L10.1687 15.4391L8.96875 17.0391H10.9688H11V20H13V17.0391H13.0312H15.0312L13.8313 15.4391L12.8 14.0641L12 12.9974ZM4.025 12.8L2.95833 12L4.025 11.2L5.4 10.1687L7 8.96875V10.9688V11H10V13H7V13.0312V15.0312L5.4 13.8313L4.025 12.8ZM21.0417 12L19.975 11.2L18.6 10.1687L17 8.96875V10.9688V11H14V13H17V13.0312V15.0312L18.6 13.8313L19.975 12.8L21.0417 12Z"
              fill={option}
          />
      </g>
  </svg>
);


const TotallightsSvg: React.FC<DashboardSvgProps> = ({option}) => (
  <svg
      width="46px"
      height="46px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill={option}
  >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
          <path
              fill={option}
              d="M96 25c-13 0-27.05 6.78-37.64 17.36-8.17 8.18-14.03 18.41-16.3 28.64H145.4l-23-46H96zm293.6 0l-23 46h103.3c-2.2-10.23-8.1-20.46-16.3-28.64C443.1 31.78 429 25 416 25h-26.4zm-27.5 14.65c-25.3 1.55-49.8 6.15-70.1 16.3-15.3 7.62-28 18.95-36 33.99-8-15.04-20.7-26.37-36-33.99-20.3-10.15-44.8-14.74-70.1-16.29l9.5 18.89c19.8 2.06 38.2 6.29 52.6 13.5C233.8 82.98 247 99 247 128v231h18V128c0-29 13.2-45.02 35-55.95 14.5-7.22 32.8-11.45 52.6-13.51l9.5-18.89zM47.34 89L19 131.2l47.8-21.9-9 66.7 32.9-58.8 13.2 85.8 14.8-89.3 46.7 58.7-22.1-69.6 51.2 13.6L163.4 89H47.34zm301.26 0l-31.1 27.4 51.2-13.6-22.1 69.6 46.7-58.7 14.8 89.3 13.2-85.8 32.9 58.8-9-66.7 47.8 21.9L464.7 89H348.6zM236.7 377l-3.4 110h45.4l-3.4-110h-38.6z"
          />
      </g>
  </svg>
);


const MaxloadSvg: React.FC<DashboardSvgProps> = ({option}) => (
  <svg
      width="44px"
      height="44px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
          <circle
              r="5"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 12 15)"
              fill="transparent"
              fill-opacity="0.32"
          />
          <circle
              r="5.3"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 12 15)"
              stroke="cyan"
              stroke-opacity="0.53"
              strokeWidth="0.8"
          />
          <path
              d="M5.23852 14.8117C5.63734 16.3002 6.51616 17.6154 7.73867 18.5535C8.96118 19.4915 10.4591 20 12 20C13.5409 20 15.0388 19.4915 16.2613 18.5535C17.4838 17.6154 18.3627 16.3002 18.7615 14.8117"
              stroke={option}
              strokeWidth="1.2"
          />
          <path
              d="M12 13L11.6252 13.4685L12 13.7684L12.3748 13.4685L12 13ZM12.6 4C12.6 3.66863 12.3314 3.4 12 3.4C11.6686 3.4 11.4 3.66863 11.4 4L12.6 4ZM6.62518 9.46852L11.6252 13.4685L12.3748 12.5315L7.37482 8.53148L6.62518 9.46852ZM12.3748 13.4685L17.3748 9.46852L16.6252 8.53148L11.6252 12.5315L12.3748 13.4685ZM12.6 13L12.6 4L11.4 4L11.4 13L12.6 13Z"
              fill={option}
          />
      </g>
  </svg>
);


const BrightnessSvg: React.FC<DashboardSvgProps> = ({option}) => (
  <svg
      fill={option}
      width="52px"
      height="52px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
  >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
          <title>brightness-low</title>
          <path d="M16 11.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75c2.623 0 4.75-2.127 4.75-4.75v0c-0.003-2.622-2.128-4.747-4.75-4.75h-0zM16 19.25c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25c1.795 0 3.25 1.455 3.25 3.25v0c-0.002 1.794-1.456 3.248-3.25 3.25h-0zM16 8.75c0.414-0 0.75-0.336 0.75-0.75v0-1c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 1c0 0.414 0.336 0.75 0.75 0.75v0zM16 23.25c-0.414 0-0.75 0.336-0.75 0.75v0 1c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-1c-0-0.414-0.336-0.75-0.75-0.75v0zM8 15.25h-1c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h1c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM25 15.25h-1c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h1c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM10.166 9.105c-0.135-0.131-0.319-0.212-0.523-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.388 0.213 0.523l0.707 0.707c0.135 0.131 0.319 0.212 0.522 0.212 0.414 0 0.75-0.336 0.75-0.75 0-0.203-0.081-0.387-0.212-0.522l0 0zM22.188 21.125c-0.136-0.136-0.324-0.22-0.531-0.22-0.415 0-0.751 0.336-0.751 0.751 0 0.207 0.084 0.395 0.22 0.531l0.707 0.707c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM9.813 21.125l-0.707 0.707c-0.135 0.136-0.218 0.323-0.218 0.529 0 0.415 0.336 0.751 0.751 0.751 0.206 0 0.393-0.083 0.528-0.218l0.707-0.707c0.136-0.136 0.22-0.324 0.22-0.531 0-0.415-0.336-0.751-0.751-0.751-0.207 0-0.395 0.084-0.53 0.219v0zM21.832 9.105l-0.707 0.707c-0.136 0.136-0.219 0.323-0.219 0.53 0 0.415 0.336 0.751 0.751 0.751 0.208 0 0.395-0.084 0.531-0.22v0l0.707-0.707c0.134-0.136 0.218-0.322 0.218-0.528 0-0.415-0.336-0.751-0.751-0.751-0.207 0-0.394 0.083-0.529 0.219l0-0z"/>
      </g>
  </svg>
);

const Dashboard: React.FC<{ lightMode: string }> = ({ lightMode }) => {
  const { globalState } = useGlobalContext();


  const BrightnessIcon = (props: Partial<CustomIconComponentProps>) => (
      <Icon component={() => <BrightnessSvg option={lightMode} />} {...props} />
  );

  const MaxloadIcon = (props: Partial<CustomIconComponentProps>) => (
      <Icon component={() => <MaxloadSvg option={lightMode} />} {...props} />
  );

  const TotallightsIcon = (props: Partial<CustomIconComponentProps>) => (
      <Icon component={() => <TotallightsSvg option={lightMode} />} {...props} />
  );

  const TotalgatewayIcon = (props: Partial<CustomIconComponentProps>) => (
      <Icon component={() => <TotalgatewaySvg option={lightMode} />} {...props} />
  );

  const LightoffIcon = (props: Partial<CustomIconComponentProps>) => (
      <Icon component={() => <LightoffSvg option={lightMode} />} {...props} />
  );

  return (
    <>
      <div style={{ display: "flex", gap: "2%", paddingTop: "6%" }}>
        <Space direction="vertical" size={16}>
          <Card
            title="Total Assets"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <HomeOutlined style={{ fontSize: "2.5rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
          <Card
            title="Total Gateways"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <TotalgatewayIcon style={{ fontSize: "2.5rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
          <Card
            title="Total Lights"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <TotallightsIcon style={{ fontSize: "2.5rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
        </Space>
        <Space direction="vertical" size={16}>
          <Card
            title="Max Load (W)"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <MaxloadIcon style={{ fontSize: "2.4rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
          <Card
            title="Gateways ON"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <ToTopOutlined style={{ fontSize: "2.5rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
          <Card
            title="Lights ON"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <BulbOutlined style={{ fontSize: "3rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
        </Space>
        <Space direction="vertical" size={16}>
          <Card
            title="Active Load (W)"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <ThunderboltOutlined style={{ fontSize: "2.6rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
          <Card
            title="Gateways OFF"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <ApiOutlined style={{ fontSize: "2.6rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
          <Card
            title="Lights OFF"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <LightoffIcon style={{ fontSize: "4rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
        </Space>
        <Space direction="vertical" size={16}>
          <Card
            title="Total faulty assets"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <ExclamationCircleOutlined style={{ fontSize: "2.5rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
          <Card
            title="Faulty Gateways"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <ExclamationCircleOutlined style={{ fontSize: "2.5rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
          <Card
            title="Brightness Percentage"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <BrightnessIcon style={{ fontSize: "2.5rem" }} />
              <p style={{ fontSize: "1.3rem" }}>Card content</p>
            </div>
          </Card>
        </Space>
      </div>
    </>
  );
};

export default Dashboard;
