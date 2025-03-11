import React from "react";
import styles from "./Article.module.scss";

function Article() {
  return (
    <article className={styles.session}>
      <h2 className={styles.title}>오늘의 수업</h2>
      <ol className="students">
        <li>홍성훈</li>
        <li>김수빈</li>
      </ol>
      <section className="content">
        <ol className="indice">
          <li>불변성 관리</li>
          <li>스타일링</li>
        </ol>
      </section>
    </article>
  );
}

export default Article;
