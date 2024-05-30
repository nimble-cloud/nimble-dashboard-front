import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/icons-material/AccountCircleOutlined";

import "./styles.css";

import Shex from "../assets/shextech.webp";
import CC from "../assets/col_logo.webp";
import Yards from "../assets/100_logo.webp";

import Marquee from "react-fast-marquee";

function CardItem({
  companyName,
  subHeader,
  commendation: desc,
  companyImage,
}: {
  companyName: string;
  subHeader: string;
  commendation: string;
  companyImage: JSX.Element & React.ReactNode;
}) {
  return (
    <Card
      sx={{
        width: "450px",
        marginRight: "30px",
        // height: "200px",
      }}
    >
      <CardActionArea>
        <CardHeader
          avatar={companyImage}
          title={companyName}
          subheader={subHeader}
        />
        <CardContent sx={{ overflowY: "auto", height: "125px", pb: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            // sx={{ maxHeight: "300px" }}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Commendations() {
  return (
    <Marquee pauseOnHover>
      <CardItem
        companyName="Schextech Networking"
        subHeader="Hugh - Owner"
        commendation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum veritatis laboriosam reiciendis officia labore corrupti rerum voluptatibus quia natus sit quidem iure modi, iste nobis eveniet temporibus molestiae amet."
        companyImage={<img src={Shex} height="50px" />}
      />
      <CardItem
        companyName="100 Yards"
        subHeader="Sam"
        commendation="Jake was fantastic to work with and we'll definitely reach out to him again as soon as we have any project. Communication was always fast and easy, and he was very accommodating in trying to connect on calls. He completed all the work successfully and we will plan on reaching out to him for our next data need."
        companyImage={<img src={Yards} height="50px" />}
      />
      <CardItem
        companyName="Colbyco Alarms"
        subHeader="Peter - Owner"
        commendation="Sawyer is a web and SQL developer par excellence with an extraordinary ability to swiftly transform ideas into robust applications. Their exceptional communication skills and knack for asking the right questions ensure project goals are crystal clear from the start. You can count on rapid responses, high-quality code, and clear explanations throughout the development process. If you're seeking a top-tier developer who excels in both technical expertise and communication, Sawyer is the ideal choice for your project. Working with them was not only productive but also a pleasure, setting a high standard for developers."
        companyImage={<img src={CC} height="50px" />}
      />
      <CardItem
        companyName="Ignacio"
        subHeader="Tenaris"
        commendation="Jake is one of the finest professionals I had the privilege to work with in my career. From the beginning, he showed great initiative and innovative critical thinking."
        companyImage={<Avatar />}
      />
      {/* <CardItem
        companyName="Schextech Networking"
        subHeader="Hugh - Owner"
        commendation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum veritatis laboriosam reiciendis officia labore corrupti rerum voluptatibus quia natus sit quidem iure modi, iste nobis eveniet temporibus molestiae amet."
        companyImage={Shex}
      />
      <CardItem
        companyName="100 Yards"
        subHeader="Shawn - Owner"
        commendation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum veritatis laboriosam reiciendis officia labore corrupti rerum voluptatibus quia natus sit quidem iure modi, iste nobis eveniet temporibus molestiae amet."
        companyImage={Yards}
      /> */}
    </Marquee>
  );
}

/*
 You are an agent working for a software and data companies whose mission is to get small to medium sized businesses out of the drudgery of working with Excel and up into the modern cloud utilizing sophisticated, custom built web applications
 and technologies. The goal is to work with the customer to solve their specific needs perfectly. We do not aim to provide solutions that meet "some" of their problems. The company is called "Nimble Cloud".
 

 How can "Nimble Cloud" help get my company out of Excel and into something that provides better collaboration?
 */
