export interface IFileLoader {
  fileList: File[];
  setFileList: (fileList: File[]) => void;
  buttonTitle: string;
  multiple?: boolean;
  accept?: string;
}
