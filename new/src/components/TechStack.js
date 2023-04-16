import React from "react";
import ImportImages from "./ImportImages";

const images = ImportImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));
export default function TechStack() {
    // This function will return a list of tech-stack images
    return (
        <div>
            <h3>Tech Stack</h3>
            <div>
                <a href="https://react.dev" rel="noreferrer noopener">
                    <img src={images['react.png']} alt="React" title="React" />
                </a>
                <a href="https://docs.python.org" rel="noreferrer noopener">
                    <img src={images['python.png']} alt="Python" title="Python" />
                </a>
                <a href="https://docs.djangoproject.com" rel="noreferrer noopener">
                    <img src={images['django.png']} alt="Django" title="Django" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer noopener">
                    <img src={images['javascript.png']} alt="JavaScript" title="JavaScript" />
                </a>
                <a href="https://flask.palletsprojects.com/en/" rel="noreferrer noopener">
                    <img src={images['flask.png']} alt="Flask" title="Flask" />
                </a>
                <a href="https://www.postgresql.org/docs/" rel="noreferrer noopener">
                    <img src={images['postgresql.png']} alt="PostgreSQL" title="PostgreSQL" />
                </a>
                <a href="https://docs.aws.amazon.com/" rel="noreferrer noopener">
                    <img src={images['aws.png']} alt="AWS" title="AWS" />
                </a>
                <a href="https://www.docker.com" rel="noreferrer noopener">
                    <img src={images['docker.png']} alt="Docker" title="Docker" />
                </a>
                <a href="https://www.linux.org" rel="noreferrer noopener">
                    <img src={images['linux.png']} alt="Linux" title="Linux" />
                </a>
                <a href="https://git-scm.com" rel="noreferrer noopener">
                    <img src={images['git.png']} alt="Git" title="Git" />
                </a>
                <a href="https://www.ubuntu.com" rel="noreferrer noopener">
                    <img src={images['ubuntu.png']} alt="Ubuntu" title="Ubuntu" />
                </a>
                <a href="https://www.vim.org" rel="noreferrer noopener">
                    <img src={images['vim.png']} alt="Vim" title="Vim" />
                </a>
                <a href="https://www.tensorflow.org" rel="noreferrer noopener">
                    <img src={images['tensorflow.png']} alt="Tensorflow" title="Tensorflow" />
                </a>
                <a href="https://ffmpeg.org/ffmpeg.html" rel="noreferrer noopener">
                    <img src={images['ffmpeg.png']} alt="FFmpeg" title="FFmpeg" />
                </a>
            </div>
        </div>
    );
}