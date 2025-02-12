'use client'

import Image from "next/image";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/ludo.loader.js",
    dataUrl: "/Build/ludo.data.unityweb",
    frameworkUrl: "/Build/ludo.framework.js.unityweb",
    codeUrl: "/Build/ludo.wasm.unityweb",
  });


  return (
    <section>
      <Unity unityProvider={unityProvider} style={{ width: "100%", height: "300%" }} />
    </section>
  );
}
