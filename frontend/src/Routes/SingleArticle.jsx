import React from "react";
import Image from "../Components/Image";
import { Link } from "react-router-dom";
import CategoriesNav from "../Components/CategoriesNav";
import Comments from "../Components/Comments";

const SingleArticle = () => {
  return (

    <div className="flex flex-col gap-8">
      <CategoriesNav />
      <div className="flex gap-8">
        <div className="lg:w-3/5 gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            quaerat alias expedita doloremque.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <span>Par: </span>
            <Link className="text-blue-800">Marjorie</Link>
            <span>Catégorie: </span>
            <Link className="text-blue-800">Catégorie</Link>
            <span>Le 13/12/2024</span>
          </div>
          <p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto error porro commodi, facere sequi nam explicabo maiores numquam inventore.</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="default-image.jpg" className="rounded-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis nesciunt nemo rerum officia repudiandae, temporibus nisi omnis id doloremque. Modi vero dolorem deserunt provident ratione nemo itaque illum reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque perspiciatis, exercitationem quidem itaque magni architecto voluptatum deserunt distinctio beatae aspernatur, nesciunt voluptate repellendus maxime, quia dicta a! Officiis, expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab atque fuga cumque nulla aut perferendis at impedit, natus minus, nisi facere! Voluptates eum similique officiis, cum nisi magni officia quos?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis nesciunt nemo rerum officia repudiandae, temporibus nisi omnis id doloremque. Modi vero dolorem deserunt provident ratione nemo itaque illum reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque perspiciatis, exercitationem quidem itaque magni architecto voluptatum deserunt distinctio beatae aspernatur, nesciunt voluptate repellendus maxime, quia dicta a! Officiis, expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab atque fuga cumque nulla aut perferendis at impedit, natus minus, nisi facere! Voluptates eum similique officiis, cum nisi magni officia quos?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis nesciunt nemo rerum officia repudiandae, temporibus nisi omnis id doloremque. Modi vero dolorem deserunt provident ratione nemo itaque illum reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque perspiciatis, exercitationem quidem itaque magni architecto voluptatum deserunt distinctio beatae aspernatur, nesciunt voluptate repellendus maxime, quia dicta a! Officiis, expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab atque fuga cumque nulla aut perferendis at impedit, natus minus, nisi facere! Voluptates eum similique officiis, cum nisi magni officia quos?</p>
        </div>
      </div>

      <Comments />
    </div>

  );
};

export default SingleArticle;
