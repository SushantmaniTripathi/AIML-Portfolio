const projects = [
  {
    title: "Image Classification App",
    tech: "TensorFlow, Streamlit",
    year: "2024",
    problem: "Classifying images using deep learning.",
    data: "Custom or standard image datasets.",
    features: "CNN architecture, image preprocessing.",
    model: "Convolutional Neural Network (CNN) with TensorFlow.",
    results: "Achieved 85%+ accuracy; deployed as web app via Streamlit.",
    lessons: "Model tuning and deployment best practices.",
    future: "Expand to multi-class classification and integrate with cloud storage.",
    demo: "",
    github: ""
  },
  {
    title: "NLP Chatbot with Sentiment Analysis",
    tech: "Flask, scikit-learn",
    year: "2024",
    problem: "Building a chatbot that understands sentiment.",
    data: "Chat logs and sentiment-labeled datasets.",
    features: "Text preprocessing, sentiment classifier.",
    model: "scikit-learn ML models; deployed via REST API (Flask).",
    results: "Responsive sentiment-aware chatbot.",
    lessons: "Integrating NLP models into APIs.",
    future: "Add multilingual support and advanced NLU.",
    demo: "",
    github: ""
  },
  {
    title: "Generative AI PDF Chatbot",
    tech: "LangChain, GPT-4, FAISS",
    year: "2024",
    problem: "Question answering from documents using generative AI.",
    data: "PDF documents indexed via FAISS.",
    features: "Document chunking, vector search.",
    model: "LangChain orchestration with GPT-4 backend.",
    results: "Accurate Q&A from PDFs, deployed on Hugging Face Spaces.",
    lessons: "Prompt engineering and chaining for better responses.",
    future: "Add multi-file support and memory.",
    demo: "",
    github: ""
  },
  {
    title: "Resume Ranker API",
    tech: "Flask, MySQL",
    year: "2024",
    problem: "API for predicting resume-job fit.",
    data: "Resumes and job descriptions stored in MySQL.",
    features: "Feature extraction from text, REST API endpoints.",
    model: "ML model for fit prediction; Flask for API.",
    results: "Reliable resume ranking API.",
    lessons: "Deploying ML models with structured databases.",
    future: "Add recruiter dashboard and feedback loop.",
    demo: "",
    github: ""
  }
];

export default projects;