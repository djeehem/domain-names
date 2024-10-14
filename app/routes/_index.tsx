import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

export const meta: MetaFunction = () => {
  return [
    { title: "Short Domain Names" },
    { name: "description", content: "Find short domain names" },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return <h1>{t("intro")}</h1>;
}
