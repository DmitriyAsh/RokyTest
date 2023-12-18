import { FC } from "react";
import cl from "./PostFilter.module.css";

const PostFilter: FC = () => {
    return (
        <div className={cl.search_filter_form}>
            <div className={cl.search_post}>
                <input
                    type='text'
                    className={cl.search_input}
                    placeholder='Search...'
                />
                <button className={cl.search_button}>Find</button>
            </div>
            <div className={cl.post_filter}>
                <select className={cl.select_filter}>
                    <option>Sort by newest</option>
                    <option>Sort by oldest</option>
                </select>
                <div>
                    <div className={cl.text_page_size}>Items on page:</div>
                    <select className={cl.select_page_size}>
                        <option value=''>5</option>
                        <option value=''>10</option>
                        <option value=''>30</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PostFilter;
