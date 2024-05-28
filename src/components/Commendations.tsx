import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import "./styles.css";

import Shex from "../assets/shextech.webp";
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
  companyImage: string;
}) {
  return (
    <Card
      sx={{
        width: "450px",
        marginRight: "30px",
      }}
    >
      <CardActionArea>
        <CardHeader
          avatar={<img src={companyImage} height="50px" />}
          title={companyName}
          subheader={subHeader}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
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
        companyImage={Shex}
      />
      <CardItem
        companyName="100 Yards"
        subHeader="Shawn - Owner"
        commendation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum veritatis laboriosam reiciendis officia labore corrupti rerum voluptatibus quia natus sit quidem iure modi, iste nobis eveniet temporibus molestiae amet."
        companyImage={Yards}
      />

      <CardItem
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
      />

      <CardItem
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
      />
    </Marquee>
  );
}

/*
 You are an agent working for a software and data companies whose mission is to get small to medium sized businesses out of the drudgery of working with Excel and up into the modern cloud utilizing sophisticated, custom built web applications
 and technologies. The goal is to work with the customer to solve their specific needs perfectly. We do not aim to provide solutions that meet "some" of their problems. The company is called "Nimble Cloud".
 

 How can "Nimble Cloud" help get my company out of Excel and into something that provides better collaboration?
 */
