import { IoAddOutline } from "react-icons/io5";

export default function FAQSection() {
  const faqs = [
    { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "What will be delivered? And when?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Questions Looks Here</h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base md:text-lg font-semibold text-gray-800">{faq.question}</h3>
                <IoAddOutline size={24} className="text-gray-600" />
              </div>
              <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
