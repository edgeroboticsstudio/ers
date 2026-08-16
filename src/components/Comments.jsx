import Giscus from "@giscus/react";

const Comments = () => {
    return (
        <section className="mt-16 pt-16 border-t border-slate-800">
            <Giscus
                id="comments"
                repo="edgeroboticsstudio/ers"
                repoId="R_kgDOT3Xyfw"
                category="Comment & Reaction"
                categoryId="DIC_kwDOT3Xyf84DDgYy"
                mapping="pathname"
                term="Welcome to the discussion!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="https://cdn.jsdelivr.net/gh/edgeroboticsstudio/ers@main/Blog/giscus-theme.css"
                lang="en"
                loading="lazy"
            />
        </section>
    );
};

export default Comments;
