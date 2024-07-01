import p5 from "p5";
import { MySketch } from "../../../common/P5Wrapper";

type CVEntry = {
  type: "education" | "job";
  title: string;
  dateStart: Date;
  dateEnd?: Date;
  description: string;
  canvasPosition?: p5.Vector;
};

type Bounds = {
  x: number;
  y: number;
  w: number;
  h: number;
};

const cvEntries: CVEntry[] = [
  {
    type: "education",
    title: "HTBLA Kaindorf",
    dateStart: new Date(2016, 8, 1),
    dateEnd: new Date(2016, 8, 1),
    description: "Started computer science branch, working language English",
  },
  {
    type: "job",
    title: "AMS AG",
    dateStart: new Date(2018, 6, 1),
    dateEnd: new Date(2018, 6, 31),
    description: "Internship in the IT-Operations department",
  },
  {
    type: "job",
    title: "BearingPoint",
    dateStart: new Date(2019, 6, 1),
    dateEnd: new Date(2019, 7, 30),
    description: "Internship as a Java software developer",
  },
  {
    type: "education",
    title: "HTBLA Kaindorf",
    dateStart: new Date(2021, 7, 1),
    dateEnd: new Date(2021, 7, 1),
    description: "Passed the matura with distinction",
  },
  {
    type: "job",
    title: "Userbrain",
    dateStart: new Date(2022, 5, 1),
    dateEnd: new Date(2025, 6, 30),
    description: "Internship as a web-developer",
  },
  {
    type: "education",
    title: "FH Joanneum",
    dateStart: new Date(2022, 9, 1),
    dateEnd: undefined,
    description: "Started Information Design Bachelor's degree program",
  },
  {
    type: "job",
    title: "Webduett.",
    dateStart: new Date(2024, 4, 1),
    dateEnd: undefined,
    description: "Started working as a UI/UX designer",
  },
];

const CVGitGraphSketch: MySketch = (width: number, height: number) => {
  return (p: p5) => {
    let cvEntriesCopy = [...cvEntries];
    const gap = width / cvEntriesCopy.length;
    const padding = 40;
    const circleSize = 10;
    const circleMp = 1.3;
    const colorEducation = p.color(81, 160, 213);
    const colorJob = p.color(189, 121, 236);
    const colorPopUp = p.color(35, 35, 35);
    const colorHighlight = p.color(163, 163, 163, 70);
    const fontSize = 16;
    let urbanistRegular: p5.Font;
    let urbanistBold: p5.Font;

    let pg: p5.Graphics;

    p.preload = () => {
      urbanistRegular = p.loadFont("/assets/fonts/Urbanist-Regular.otf");
      urbanistBold = p.loadFont("/assets/fonts/Urbanist-Bold.otf");
    };

    p.setup = () => {
      p.createCanvas(width, height);
      pg = p.createGraphics(p.width, p.height);
      drawCVGitGraph(pg);
    };

    const drawCVGitGraph = (canvas: p5.Graphics) => {
      let lastXY = canvas.createVector(0, canvas.height - padding);
      let lastEducationXY = canvas.createVector(0, canvas.height - padding);
      let currentColor: p5.Color = colorEducation;
      for (let i = 0; i < cvEntriesCopy.length; i++) {
        let x = i * gap + padding;
        let y = canvas.height - padding;

        if (cvEntriesCopy[i].type === "education") {
          currentColor = colorEducation;

          // line to last education
          canvas.stroke(colorEducation);
          canvas.line(
            lastEducationXY.x + circleSize * circleMp,
            lastEducationXY.y,
            x - circleSize * circleMp,
            y
          );
          lastEducationXY = canvas.createVector(x, y);
        } else if (cvEntriesCopy[i].type === "job") {
          currentColor = colorJob;
          y -= gap;
        }

        // Entry circle
        canvas.noStroke();
        canvas.fill(currentColor);
        canvas.circle(x, y, circleSize);

        // Bottom mini skala line
        canvas.strokeWeight(1);
        canvas.stroke(colorHighlight);
        canvas.line(x, canvas.height, x, canvas.height - padding / 2);

        // line to last point
        canvas.strokeWeight(3);
        canvas.stroke(i > 0 ? colorJob : colorEducation);
        canvas.line(
          lastXY.x + circleSize * (lastXY.y == y ? circleMp : 1),
          lastXY.y +
            (lastXY.y == y ? 0 : lastXY.y > y ? -circleSize : circleSize),
          x - circleSize * (lastXY.y == y ? circleMp : 1),
          y + (lastXY.y == y ? 0 : lastXY.y > y ? circleSize : -circleSize)
        );

        lastXY = canvas.createVector(x, y);
        cvEntriesCopy[i].canvasPosition = p.createVector(x, y);
      }

      canvas.line(
        lastXY.x + circleSize * circleMp,
        lastXY.y,
        canvas.width,
        lastXY.y
      );

      if (lastEducationXY !== lastXY) {
        canvas.stroke(colorEducation);
        canvas.line(
          lastEducationXY.x + circleSize * circleMp,
          lastEducationXY.y,
          p.width,
          lastEducationXY.y
        );
      }
    };

    const isOnMouse = (pos: p5.Vector, deltaRadius: number) => {
      return p.dist(pos.x, pos.y, p.mouseX, p.mouseY) < deltaRadius;
    };

    const getDateTextFromCVEntry = (entry: CVEntry): string => {
      if (entry.dateEnd === undefined) {
        return (
          "since " +
          entry.dateStart.toLocaleString("default", { month: "short" }) +
          ", " +
          entry.dateStart.getFullYear()
        );
      } else if (
        entry.dateStart !== entry.dateEnd &&
        entry.dateStart.getMonth() !== entry.dateEnd.getMonth()
      ) {
        return (
          entry.dateStart.toLocaleString("default", { month: "short" }) +
          " - " +
          entry.dateEnd.toLocaleString("default", { month: "short" }) +
          ", " +
          entry.dateStart.getFullYear()
        );
      } else {
        return (
          entry.dateStart.toLocaleString("default", { month: "short" }) +
          ", " +
          entry.dateStart.getFullYear()
        );
      }
    };

    p.draw = () => {
      p.clear();
      if (pg) {
        p.image(pg, 0, 0);
      }

      for (let i = 0; i < cvEntriesCopy.length; i++) {
        const entry = cvEntriesCopy[i];
        if (
          entry.canvasPosition !== undefined &&
          isOnMouse(entry.canvasPosition, circleSize * circleMp)
        ) {
          p.stroke(entry.type === "education" ? colorEducation : colorJob);
          p.noFill();
          p.strokeWeight(5);
          p.circle(
            entry.canvasPosition.x,
            entry.canvasPosition.y,
            circleSize * circleMp * 2
          );

          const boundsTitle = urbanistBold.textBounds(
            entry.title,
            p.mouseX,
            p.mouseY,
            fontSize
          ) as Bounds;
          const boundsDescription = urbanistRegular.textBounds(
            entry.description,
            boundsTitle.x,
            boundsTitle.y + boundsTitle.h * 2 + padding / 8,
            fontSize
          ) as Bounds;

          const rectWidth = boundsDescription.w + padding / 2;
          const rectHeight =
            boundsTitle.h + boundsDescription.h + padding / 8 + padding / 2;
          const rectX = p.constrain(
            boundsTitle.x - padding / 4,
            padding / 2,
            p.width - rectWidth - padding / 2
          );
          const rectY = boundsTitle.y - padding / 4 - rectHeight;

          p.fill(colorPopUp);
          p.stroke(colorHighlight);
          p.strokeWeight(1);
          p.rect(rectX, rectY, rectWidth, rectHeight, 8);

          p.noStroke();
          p.fill(255);
          p.textFont(urbanistBold, fontSize);
          p.text(entry.title, rectX + padding / 4, rectY + padding / 2);

          p.textFont(urbanistRegular, fontSize);
          p.text(
            entry.description,
            rectX + padding / 4,
            boundsDescription.y + padding / 4 - rectHeight
          );

          p.fill(255, 95);
          p.text(
            getDateTextFromCVEntry(entry),
            rectX + padding / 4 + boundsTitle.w + padding / 4,
            rectY + padding / 2
          );
        }
      }
    };
  };
};

export default CVGitGraphSketch;
