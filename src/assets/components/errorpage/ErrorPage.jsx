import React from 'react';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-6 p-4 lg:max-w-[70vw] my-1">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/404-four-not-found-error-3d-icon-download-in-png-blend-fbx-gltf-file-formats--status-code-http-response-pack-seo-web-icons-5073039.png"
        alt=""
      />
      <h1>404 Not Found.</h1>
      <NavLink className="btn btn-outline btn-success" to="/">
        Back to Home
      </NavLink>
    </div>
  );
}

export default ErrorPage;
