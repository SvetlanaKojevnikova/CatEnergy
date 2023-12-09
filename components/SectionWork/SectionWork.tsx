import CardWork from "./CardWork";

export default function SectionWork() {
  return (
    <>
      <h1 className="px-24 pt-12 text-6xl">Как это работает</h1>;
      <div className="grid grid-cols-4 gap-10 px-24 py-10">
        <CardWork
          text=" Функциональное питание содержит только полезные питательные вещества."
          alt="leaf"
          path="/1.png"
          pathnumber="/Group 1.png"
          width={78}
        />

        <CardWork
          text=" Выпускается в виде порошка, 
          который нужно лишь залить 
          кипятком и готово."
          alt="wash"
          path="/2.png"
          pathnumber="/Group 2.png"
          width={124}
        />

        <CardWork
          text="Замените один-два приема 
          обычной еды на наше 
          функциональное питание."
          alt="leaf"
          path="/3.png"
          pathnumber="/Group 2.png"
          width={124}
        />

        <CardWork
          text="Уже через месяц наслаждайтесь 
          изменениями к лучшему 
          вашего питомца!"
          alt="clock"
          path="/4.png"
          pathnumber="/Group 4.png"
          width={135}
        />
      </div>
    </>
  );
}
