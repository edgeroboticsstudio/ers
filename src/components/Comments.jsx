import Giscus from "@giscus/react";

const Comments = () => {
    return (
        <section className="mt-16 pt-16 border-t border-slate-800">
            <Giscus
                id="comments"
                repo="edgeroboticsstudio/Blog"
                repoId="R_kgDORVYWyQ"
                category="Comments"
                categoryId="DIC_kwDORVYWyc4C7U43"
                mapping="pathname"
                term="Welcome to the discussion!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="https://cdn.jsdelivr.net/gh/edgeroboticsstudio/Blog/giscus-theme.css"
                lang="en"
                loading="lazy"
            />
        </section>
    );
};

export default Comments;
