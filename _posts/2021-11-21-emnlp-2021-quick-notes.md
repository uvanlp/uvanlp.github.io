---
layout: post
title: "EMNLP 2021 Quick Notes"
author: "Wanyu Du"
homepage: "https://wyu-du.github.io/"
date: 2021-11-21
tldr: "A quick summary of some EMNLP 2021 papers."
editor: ""
label: "summary"
---


Here are some quick notes for EMNLP 2021 papers, which focus on the evaluation of text generation tasks, few-shot learning for generation and classification tasks.

- [Evaluation](#evaluation)
  - [Resources and Evaluation](#resources-and-evaluation)
- [NLG (Generation in Low-data Settings)](#nlg-generation-in-low-data-settings)
  - [Efficient Methods for NLG](#efficient-methods-for-nlg)
  - [Dialogue and Interactive Systems](#dialogue-and-interactive-systems)
  - [Question Answering](#question-answering)
- [NLU (Sample Selection and Data Augmentation)](#nlu-sample-selection-and-data-augmentation)
  - [Efficient Methods for NLU](#efficient-methods-for-nlu)
  - [Machine Learning for NLU](#machine-learning-for-nlu)


***
### Evaluation
#### RESOURCES AND EVALUATION

1. Visually Grounded Reasoning across Languages and Cultures (best long paper)
	- [[video](https://underline.io/events/192/sessions/7834/lecture/37516-visually-grounded-reasoning-across-languages-and-cultures)]
	[[paper](https://aclanthology.org/2021.emnlp-main.818/)]
	[[code](https://github.com/marvl-challenge/marvl-code)]
	- A 5K evaluation dataset for cross-lingual vision and language transfer learning.
	- Task: predict if a caption is true/false for 2 images.
2. Compression, Transduction, and Creation: A Unified Framework for Evaluating Natural Language Generation
	- [[video](https://underline.io/events/192/sessions/7816/lecture/38012-compression,-transduction,-and-creation-a-unified-framework-for-evaluating-natural-language-generation)]
	[[paper](https://aclanthology.org/2021.emnlp-main.599/)]
	[[code](https://github.com/tanyuqian/ctc-gen-eval)]
	- Categorize NLG tasks based on **information change** from input (\\( X\\)) to output (\\(Y\\)): (1) compression (\\(X > Y\\)), (2) transduction (\\(X = Y\\)), (3) creation (\\(X < Y\\)).
	- Evaluate by measuring **information alignment** (between \\(x\\), \\(y\\), reference \\(r\\), and context \\(c\\)) for different NLG tasks.
3. Evaluating the Evaluation Metrics for Style Transfer: A Case Study in Multilingual Formality Transfer
	- [[video](https://underline.io/events/192/sessions/7780/lecture/37990-evaluating-the-evaluation-metrics-for-style-transfer-a-case-study-in-multilingual-formality-transfer)]
	[[paper](https://aclanthology.org/2021.emnlp-main.100/)]
	[[code](https://github.com/Elbria/xformal-FoST-meta)]
	- A structured review of style transfer evaluation: Style, Meaning, Fluency.
	- Suggest a set of automatic metrics for style transfer that empirically aligned well with human across 4 different languages.
4. The Perils of Using Mechanical Turk to Evaluate Open-Ended Text Generation
	- [[poster](https://underline.io/events/192/posters/8252/poster/38836-the-perils-of-using-mechanical-turk-to-evaluate-open-ended-text-generation)]
	[[paper](https://aclanthology.org/2021.emnlp-main.97/)]
	- Reveal all crowdsourcing problems of evaluating text generation on AMT.
	- Be very careful to select qualified AMT workers to accomplish your task.


***
### NLG (Generation in Low-data Settings)

#### EFFICIENT METHODS FOR NLG

1. When Attention Meets Fast Recurrence: Training Language Models with Reduced Compute (outstanding paper)
	- [[video](https://underline.io/events/192/sessions/7817/lecture/37932-when-attention-meets-fast-recurrence-training-language-models-with-reduced-compute)]
	[[paper](https://aclanthology.org/2021.emnlp-main.602/)]
	[[code](https://github.com/asappresearch/sru)]
	- Attention is NOT ALL we need, combine fast recurrence and attention: **attention helps recurrence avoid information & gradient propagation issue, and recurrence helps attention remove multi-head and relative position**.
	- Parallelize the computation (linear project + attention) of state vector \\(c_t\\), forget gate \\(f_t\\) and reset gate \\(r_t\\), then recurrently compute hidden state \\(h_t\\).
	- Much faster training speed, comparable test perplexity, and similar amount of parameters with Transformer-XL.
2. Few-Shot Text Generation with Natural Language Instructions
	- [[video](https://underline.io/events/192/sessions/7767/lecture/37535-few-shot-text-generation-with-natural-language-instructions)]
	[[paper](https://aclanthology.org/2021.emnlp-main.32/)]
	[[code](https://github.com/timoschick/pet)]
	- Provide large pretrained LM with some manually-designed task descriptions (**prompt**), and fine-tune the model under the few-shot summarization tasks.
3. Smelting Gold and Silver for Improved Multilingual AMR-to-Text Generation
	- [[video](https://underline.io/events/192/sessions/7771/lecture/37489-smelting-gold-and-silver-for-improved-multilingual-amr-to-text-generation)]
	[[paper](https://aclanthology.org/2021.emnlp-main.57/)]
	[[code](https://github.com/UKPLab/m-AMR2Text)] 
	- Data augmentation: build neural models to annotate unlabeled data: (text -> AMR), (AMR -> text).


#### DIALOGUE AND INTERACTIVE SYSTEMS

1. MindCraft: Theory of Mind Modeling for Situated Dialogue in Collaborative Tasks (outstanding paper)
	- [[video](https://underline.io/events/192/sessions/7778/lecture/37814-mindcraft-theory-of-mind-modeling-for-situated-dialogue-in-collaborative-tasks)]
	[[paper](https://aclanthology.org/2021.emnlp-main.85/)]
	[[code](https://github.com/sled-group/MindCraft)]
	- A new dataset to study human collaborative behaviors in situated language communication.
2. GOLD: Improving Out-of-Scope Detection in Dialogues using Data Augmentation
	- [[video](https://underline.io/events/192/posters/8238/poster/37387-gold-improving-out-of-scope-detection-in-dialogues-using-data-augmentation)]
	[[paper](https://aclanthology.org/2021.emnlp-main.35/)]
	[[code](https://github.com/asappresearch/gold)]
	- Use data augmentation to improve the out-of-scope detection in dialogues.
	- Find out-of-scope utterances from external related datasets, replace the original utterance with the external utterances, select the candidate which receives major votes from an ensemble of out-of-scope detectors. 
3. ConvFiT: Conversational Fine-Tuning of Pretrained Language Models
	- [[video](https://underline.io/events/192/sessions/7778/lecture/38061-convfit-conversational-fine-tuning-of-pretrained-language-models)]
	[[paper](https://aclanthology.org/2021.emnlp-main.88/)]
	- A new pretrained conversational LM ConvFiT, which shows SOTA performances in few-shot intention detection task.
4. Self-training Improves Pre-training for Few-shot Learning in Task-oriented Dialog Systems
	- [[video](https://underline.io/events/192/sessions/7786/lecture/37965-self-training-improves-pre-training-for-few-shot-learning-in-task-oriented-dialog-systems)]
	[[paper](https://aclanthology.org/2021.emnlp-main.142/)]
	- Leverage **self-training** + **data augmentation (MLM)** for 4 tasks in few-shot learning setting: intent classification, dialog state tracking, dialog act prediction, response selection.


#### QUESTION ANSWERING

1. SituatedQA: Incorporating Extra-Linguistic Contexts into QA (outstanding paper)
	- [[video](https://underline.io/events/192/sessions/7814/lecture/37928-situatedqa-incorporating-extra-linguistic-contexts-into-qa)]
	[[paper](https://aclanthology.org/2021.emnlp-main.586/)]
	[[code](https://situatedqa.github.io/)]
	- A new open-retrieval QA dataset where systems must produce the correct answer to a question given the temporal or geographical context.
2. Surface Form Competition: Why the Highest Probability Answer Isn’t Always Right
	- [[video](https://underline.io/events/192/posters/8251/poster/37944-surface-form-competition-why-the-highest-probability-answer-isn%E2%80%99t-always-right)]
	[[paper](https://aclanthology.org/2021.emnlp-main.564/)]
	[[code](https://github.com/peterwestuw/surface-form-competition)]
	- For zero-shot QA, GPT-3 may generate multiple valid answers, but those answers may not be one of the multiple choice options. Therefore, ranking by string probabilties can be problematic.
	- Introduce **domain conditional pointwise mutual information**, which reweighs each option according to a term that is proportional to its a priori likelihood within the context of the zero-shot task, to score the multiple choice options.
3. Synthetic Data Augmentation for Zero-Shot Cross-Lingual Question Answering
	- [[video](https://underline.io/events/192/posters/8272/poster/37633-synthetic-data-augmentation-for-zero-shot-cross-lingual-question-answering)]
	[[paper](https://aclanthology.org/2021.emnlp-main.562/)]
	- Leverage question generation models to produce **synthetic multi-lingual QA pairs**.
4. Back-Training excels Self-Training at Unsupervised Domain Adaptation of Question Generation and Passage Retrieval
	- [[video](https://underline.io/events/192/posters/8229/poster/38034-back-training-excels-self-training-at-unsupervised-domain-adaptation-of-question-generation-and-passage-retrieval)]
	[[paper](https://aclanthology.org/2021.emnlp-main.566/)]
	[[code](https://github.com/McGill-NLP/MLQuestions)]
	- In self-training, inputs are from target domain and outputs are predicted, which can lead to overfitting to source domain.
	- In **back-training**, inputs are predicted and outputs are from target domain, which generates data closer to target domain.


***
### NLU (Sample Selection and Data Augmentation)

#### EFFICIENT METHODS FOR NLU

1. Dynamic Knowledge Distillation for Pre-trained Language Models
	- [[video](https://underline.io/events/192/sessions/7767/lecture/37442-dynamic-knowledge-distillation-for-pre-trained-language-models)]
	[[paper](https://aclanthology.org/2021.emnlp-main.31/)]
	[[code](https://github.com/lancopku/DynamicKD)]
	- Dynamic Teacher Adoption: compute the prediction uncertainty (entropy) of the student model across all training data, dive the training data into high-uncertainty group and low-uncertainty group, and select the large teacher model for high-uncertainty group and the small teacher model for low-uncertainty group.
	- Dynamic Data Selection: **select informative instances** in each training batch according to **the prediction uncertainty (entropy) of the student model**.
	- Dynamic Objective Adjustment: adjust the weight of the aligment objective (matching student & teacher hidden states) with the prediction uncertainty (entropy) of the student model.
2. HypMix: Hyperbolic Interpolative Data Augmentation
	- [[poster](https://underline.io/events/192/posters/8276/poster/38974-hypmix-hyperbolic-interpolative-data-augmentation)]
	[[paper](https://aclanthology.org/2021.emnlp-main.776/)]
	[[code](https://github.com/caisa-lab/hypmix-emnlp)]
	- A new **interpolation & mixup data augmentation** method: augment unlabeled texts via back-translation, and predict soft labels for unlabeled and augmented data **in the hyperbolic space**.
3. Unsupervised Data Augmentation with Naive Augmentation and without Unlabeled Data
	- [[video](https://underline.io/events/192/posters/8240/poster/37484-unsupervised-data-augmentation-with-naive-augmentation-and-without-unlabeled-data)]
	[[paper](https://aclanthology.org/2021.emnlp-main.408/)]
	- Compare different data augmentation methods in text classification and sequence labeling: back-translation, random substitutions, masked language model.
	- Performances: masked language model > random substitutions > back-translation.


#### MACHINE LEARNING FOR NLU

1. Active Learning by Acquiring Contrastive Examples 
	- [[video](https://underline.io/events/192/sessions/7770/lecture/37821-active-learning-by-acquiring-contrastive-examples)]
	[[paper](https://aclanthology.org/2021.emnlp-main.51/)]
	[[code](https://github.com/mourga/contrastive-active-learning)]
	- **Uncertainty**: the predictive uncertainty, e.g. least confident data.
	- **Diversity**: the heterogeneity in feature space, e.g. clustering.
	- **Contrastive examples**: datapoints that are close in the model feature space (\\(K\\)-nearest neighbours), but the model produces different predictive likelihoods.
2. Certified Robustness to Programmable Transformations in LSTMs
	- [[video](https://underline.io/events/192/sessions/7777/lecture/37276-certified-robustness-to-programmable-transformations-in-lstms)]
	[[paper](https://aclanthology.org/2021.emnlp-main.82/)]
	[[code](https://github.com/ForeverZyh/certified_lstms)]
	- Develop a **certified** defense to arbitrary string transformations that applies to recursive neural networks.
	- Certify robustness by proving that a network's prediction is the same no matter how a given input is perturbed. 
3. Efficient Contrastive Learning via Novel Data Augmentation and Curriculum Learning
	- [[video](https://underline.io/events/192/sessions/7785/lecture/37615-efficient-contrastive-learning-via-novel-data-augmentation-and-curriculum-learning)]
	[[paper](https://aclanthology.org/2021.emnlp-main.138/)]
	[[code](https://github.com/vano1205/EfficientCL)]
	- Data augmentation: cutoff (on hidden states) + PCA jittering is effective for robustness to sentence-level noise.
	- **Curriculum learning (easy first, difficult later)**: increase the noise level of input embedding leads to **faster convergence**.
4. STraTA: Self-Training with Task Augmentation for Better Few-shot Learning
	- [[video](https://underline.io/events/192/posters/8247/poster/37852-strata-self-training-with-task-augmentation-for-better-few-shot-learning)]
	[[paper](https://aclanthology.org/2021.emnlp-main.462/)]
	- **Task augmentation**: train an **NLI data generator** to produce synthetic in-domain NLI training examples.
	- Self-training: initialize the teacher and student model with a strong auxiliary-task base model, then fine-tune the base model using the labeled target task data. At each iteration, use the teacher model to generate pesudo-labels for unlabeled in-domain examples and augment the original labeled target task data.
	- Experiments show that using a strong base model and training on a broad distribution of pseudo-labeled data are key factors for successful deployment in NLP.


