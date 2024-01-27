import { FC } from "react";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";


const DynamicWalletMultiButton = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
    { ssr: false }
);

export const AppBar: FC = () => {
    return (
        <div className="flex w-full justify-end">
            <DynamicWalletMultiButton />
        </div>
    );
};
