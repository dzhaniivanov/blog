import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing 
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          aliquid vitae culpa hic voluptatum nobis delectus distinctio sed natus
          sunt magnam similique quos, placeat, asperiores ex eligendi veritatis
          praesentium. Dignissimos deserunt id totam consectetur aliquid aut.
          Excepturi alias atque nostrum ut provident consequuntur, nesciunt
          recusandae deleniti molestias inventore? Eius quae illo, sunt a esse
          corrupti veniam, quidem id dolore aspernatur non nostrum dignissimos
          consequuntur natus nemo illum aliquid dolorum inventore. Quasi aliquid
          asperiores nisi beatae laborum quos magnam? Sunt quae nulla recusandae
          consectetur iure, maxime culpa magni excepturi at veniam sed debitis.
          Nulla unde sint voluptatem voluptatum recusandae blanditiis libero
          doloribus repudiandae nesciunt autem. Temporibus beatae accusantium
          sit aliquid ut, atque consectetur a? A odio dolore tempore est quos
          autem accusantium eum debitis at, expedita similique veniam ipsa
          ducimus eos aspernatur ab, nisi quidem molestiae reiciendis delectus
          dolores qui? Odit tempora repellat voluptates libero voluptatibus,
          aperiam dolores, expedita minus, repellendus nemo illum? Eveniet
          provident dignissimos eum mollitia dolor hic laborum vel, veritatis
          quae, nesciunt odit tenetur excepturi consequuntur assumenda adipisci,
          maiores nam tempora dolore? Vero eaque ab reiciendis excepturi
          repellat, hic dolor esse mollitia alias ut ex pariatur labore totam!
          Nostrum adipisci voluptatum rerum, rem veniam esse harum cupiditate
          unde in deserunt vel consequatur sit maiores a. Labore ipsa impedit
          magnam sunt aspernatur doloribus consectetur inventore nostrum enim
          eveniet laborum corporis atque, at culpa voluptatibus, tempore
          dignissimos quis veniam cum reprehenderit repellendus unde repellat.
          Cum dolorem qui iusto recusandae quos odit fuga necessitatibus placeat
          ratione, dolorum iure iste harum eaque nemo enim odio reiciendis
          laboriosam, mollitia consequuntur delectus quas? Cum, odit
          accusantium. Veritatis accusamus id quaerat, animi corrupti maiores
          aliquid, numquam aperiam molestiae amet tempore, consectetur rerum
          blanditiis ipsa laboriosam tempora? Ducimus voluptatibus tempore,
          consectetur possimus alias quaerat similique ipsa expedita commodi
          dolores labore minus perferendis! Esse praesentium quisquam suscipit
          dolor aliquid provident reiciendis quaerat est culpa, voluptas
          necessitatibus quis ab corporis et tempore. Incidunt praesentium
          deserunt saepe voluptate iure eum, odio voluptates a cumque odit! Qui,
          aperiam eaque? Doloremque in quod omnis, fuga reprehenderit, iusto quo
          placeat ratione itaque, optio error qui. Aliquid id reprehenderit
          iusto ea esse recusandae vel, deleniti et illum sapiente ipsa
          accusantium ducimus atque temporibus, modi cupiditate incidunt magnam!
          Ratione, nesciunt iure quia adipisci cumque odio tempore voluptate
          repellat laudantium quo nisi? Corporis quidem eveniet distinctio
          accusamus. Expedita exercitationem quisquam incidunt cum, molestiae
          voluptate perspiciatis optio magni voluptas dolor, est aspernatur
          alias labore voluptatum magnam debitis nesciunt ad quos, quia pariatur
          ipsa id minima deleniti! Nostrum, quaerat iste? Voluptatibus sed
          dolorum repellat officia itaque ex aut architecto suscipit quasi
          provident, rerum, maxime error dignissimos eos voluptatum explicabo
          nam reiciendis modi nostrum odio inventore quis enim culpa. Molestiae,
          ullam, omnis accusamus vitae iusto animi non placeat minima fuga
          reiciendis, quae sit. Error, accusamus iste. Laborum quo soluta optio
          ducimus, ea commodi nam. Voluptate placeat at quod hic, quas repellat,
          beatae molestias recusandae, eum veritatis error neque! Quos repellat
          consectetur quis unde ipsum ea ipsam! Eos beatae, culpa excepturi
          eligendi quia repudiandae autem sequi qui ab saepe?
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
