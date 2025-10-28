import FAQSection from "./components/FAQSection";
import type { FAQType } from "./types/FAQs";

function App() {
  const faqs: FAQType[] = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected deviceDepending on your plan, you can also download TV shows and movies to your Android phone or tablet, iPhone, iPad, or Google Chromebook device and watch without an internet connection.If you are already a member and would like to learn more about using Netflix, visit Getting started with Netflix.",
    },
    {
      question: "How Much Does Netflix Cost?",
      answer:
        "Netflix subscription is on a monthly basis, with no contracts or commitments, and you can start or stop your membership at any time. The cost varies depending on the plan and your location",
    },
    {
      question: "Is Netflix Free or Paid?",
      answer:
        "Netflix does not offer free trials, but you have the freedom to change your plan or cancel online at any time if you decide Netflix isn't for you. You can sign up and take advantage of all Netflix has to offer.",
    },
    {
      question: "What are benifits of Netflix?",
      answer:
        "There are a number of key benefits to using an app like NETFLIX. First, it allows you to watch movies and television shows whenever you want, without having to leave your home. Second, it offers a wide selection of movies and television shows to choose from. And third, it is affordable and easy to use.",
    },
    {
      question: "Can I Share my Netflix Account?",
      answer:
        "A Netflix account is meant to be shared by people living together in one household. People who are not in your household will need to sign up for their own account to watch; or in many countries you can buy an extra member slot to add an extra member to your account.",
    },
    {
      question: "How do I cancle My Account?",
      answer:
        "To cancel Netflix, sign in to your account on the Netflix website, go to the Account page, select Cancel Membership, and then click Finish Cancellation to confirm. You will be able to continue using the service until the end of your current billing cycle",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <FAQSection FrequentlyAskedQuestions={faqs} />
    </div>
  );
}

export default App;
