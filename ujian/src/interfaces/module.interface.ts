export interface ModuleInterface {
  moduleName: string
  section: string
  subSection: string
  questionGroup: string
}

export interface DataQuestion extends ModuleInterface {
  noQuestion: string;
  question: string;
  optionId: string;
  typeQuestion: string;
  answer: string;
  imageOptions?: string;
  isExample?: boolean;
  options?: DataOption[]
}

export interface DataOption {
  optionId: string;
  label: string;
  value: string;
}