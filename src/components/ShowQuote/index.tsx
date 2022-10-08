import { useEffect, useState } from "react";
import { getQuote } from "../../api/quote";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Quote } from "./styles";

interface QuoteProps {
  id: string;
  language: string;
  sentence: string;
}

export default function ShowQuote() {
  const [quote, setQuote] = useLocalStorage<QuoteProps>(
    "quote",
    {} as QuoteProps
  );
  const [quotesID, setQuotesID] = useLocalStorage<Array<string>>(
    "quotesID",
    []
  );
  const [over, setOver] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await getQuote(quotesID);

      if (res.data.over === true) {
        setQuotesID([]);
        setOver(true);
        return;
      }

      if (res.status === 201) {
        setQuote(res.data);
        setQuotesID((prev: Array<string>) => [...prev, res.data.id]);
      }
    };

    getData();
  }, [over]);

  return (
    <Quote
      family={quote.language === "Chinese" ? "Ma Shan Zheng" : "Noto Serif JP"}
      size={quote.language === "Chinese" ? "1.8rem" : "1.45rem"}
    >
      {quote.sentence}
    </Quote>
  );
}
