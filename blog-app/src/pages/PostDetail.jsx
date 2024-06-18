import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbail from '../images/Thumbail.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbail} alt="" />
        </div>
        <p> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis odio assumenda adipisci, minus accusantium incidunt beatae excepturi sapiente. Necessitatibus beatae dolor praesentium laudantium nobis quasi quae perspiciatis? Fugiat rerum blanditiis tempora possimus ullam magnam! Dicta, pariatur obcaecati. Illo, laudantium sapiente?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laudantium provident atque nemo obcaecati rem accusantium quisquam sapiente, quibusdam similique ea ducimus deserunt animi facilis tempora, ut vel quod quia perferendis inventore soluta voluptatem. Officia sint placeat ducimus, repellendus nostrum nobis debitis enim recusandae reprehenderit possimus magni, porro vitae nemo, assumenda vel culpa ad obcaecati!
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum veniam voluptatem sunt dolorem hic nulla. Libero, illum quaerat fugiat culpa inventore voluptatum est repudiandae distinctio eum debitis voluptate labore sapiente exercitationem dolore. Ab sit quisquam voluptatem est praesentium, aut repellendus atque quam blanditiis facere amet! Atque ratione accusamus, placeat consequuntur nobis illum repellendus nesciunt quas nemo laudantium quisquam earum enim facere dolore possimus! Illo porro, cumque quod debitis recusandae esse maxime repellendus quos iure molestiae quaerat id enim soluta minus hic inventore commodi voluptas excepturi sed beatae! Illum adipisci aspernatur voluptas autem? Sunt nesciunt possimus consequatur tempore suscipit. Porro delectus, nobis veniam qui quod magni necessitatibus tenetur in voluptatem id debitis?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consectetur natus deserunt iste culpa veritatis sequi, similique iusto repudiandae suscipit? Excepturi dignissimos possimus nobis tempore explicabo recusandae cupiditate molestiae quibusdam.
          Aut ad, sequi voluptate quaerat eaque saepe est. Perferendis mollitia, vitae aliquam, tempora facere fugit ducimus error nihil vel eius excepturi amet ut quos laudantium? Quidem laborum doloribus in pariatur.
          Dolorum blanditiis ea culpa rerum est ipsum hic, laborum numquam, repellendus quibusdam temporibus inventore nesciunt eligendi ullam deleniti, labore sint esse ut. Doloremque dolor quidem minus fuga autem iure dolorum!
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate corrupti amet voluptatum beatae nisi sapiente non, minima quia modi vitae dolores reiciendis porro sunt perspiciatis iusto nobis autem accusamus tenetur libero at magnam blanditiis repellat? Sint a aliquid accusantium maxime harum, nostrum aliquam officia possimus dolores commodi voluptatibus sequi quo dolore sapiente repellendus, accusamus corrupti. Deserunt, ullam aliquid quis, sint ut quaerat similique, perspiciatis repellendus soluta facere dolore rem tempore quibusdam? Nesciunt libero quia debitis! Sapiente, eos natus aliquid deserunt quasi laboriosam non tenetur asperiores expedita possimus corporis, autem cum quas facere unde, iste commodi hic. Nulla eaque in quidem. Repellendus cupiditate quasi molestias! Distinctio delectus laborum molestias temporibus. Consequatur impedit iste sequi cupiditate atque qui tenetur dolores deleniti explicabo repellendus, cumque facere? Facere corporis voluptatibus quam tempora! Iste alias, deserunt officia odio saepe repellendus inventore repudiandae dolor veritatis. At, fugit dignissimos. Sapiente quaerat placeat autem quibusdam quos qui voluptates rerum, mollitia repellendus porro dignissimos accusamus, possimus vero expedita repellat, ullam voluptatibus sit dolor magni vel et odio! Consectetur eum consequuntur odio quod iusto labore sint culpa illum quasi numquam eius eaque alias libero, exercitationem ad! Nesciunt culpa quis quia consequuntur, debitis atque totam magni minus aperiam dolores in omnis.</p>
      </div>
    </section>
  )
}

export default PostDetail