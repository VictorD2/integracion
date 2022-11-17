(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{1299:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cotiza",function(){return __webpack_require__(171)}])},171:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return cotiza}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),PencilIcon=__webpack_require__(8974),TrashIcon=__webpack_require__(6249),InboxIcon=__webpack_require__(8832);let AppEmpty=param=>{let{message}=param;return(0,jsx_runtime.jsx)("div",{className:"flex flex-row justify-center items-center p-20 uppercase",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-4 justify-center items-center",children:[(0,jsx_runtime.jsx)(InboxIcon.Z,{className:"w-16"}),(0,jsx_runtime.jsx)("span",{children:message})]})})};AppEmpty.defaultProps={message:"no record"};var ArrowPathIcon=__webpack_require__(5973);let AppLoading=param=>{let{overlayColor,text,textColor,height}=param,classNames=function(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")};return(0,jsx_runtime.jsxs)("div",{className:classNames("".concat(overlayColor),"".concat(height),"w-full opacity-70 top-0 left-0 absolute flex flex-col items-center justify-center gap-2"),children:[(0,jsx_runtime.jsx)(ArrowPathIcon.Z,{className:classNames("".concat(textColor),"w-10 h-10 animate-spin")}),(0,jsx_runtime.jsx)("span",{className:classNames("".concat(textColor)),children:text})]})};AppLoading.defaultProps={overlayColor:"bg-gray-900",text:"Cargando Datos...",textColor:"text-white",height:"h-64"};let AppTable=param=>{let{columns,rows,count,emptyMessage,loading,heightLoading}=param;return(0,jsx_runtime.jsxs)("div",{className:"w-24 min-w-full relative",children:[(0,jsx_runtime.jsxs)("div",{className:"scrollbar-thin ".concat(heightLoading," scrollbar-thumb-secondary scrollbar-track-gray-100 overflow-x-scroll relative"),children:[(0,jsx_runtime.jsxs)("table",{className:"rounded-b-md min-w-full relative divide-y divide-gray-200",children:[(0,jsx_runtime.jsx)("thead",{className:"bg-gray-50",children:columns}),(0,jsx_runtime.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 tablaDatos",children:count>0&&rows})]}),0===count&&loading&&(0,jsx_runtime.jsx)(AppEmpty,{message:emptyMessage})]}),!loading&&(0,jsx_runtime.jsx)(AppLoading,{height:heightLoading})]})};AppTable.defaultProps={emptyMessage:"no records",heightLoading:"h-full"};var esm=__webpack_require__(2628);let AppButton=param=>{let{className,variant,children,onClick,disabled,textColor,bgColor,border,height,padding,type,loading}=param,classNames=function(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")};return(0,jsx_runtime.jsx)(esm.Z,{className:classNames("".concat(className),"".concat(height)),children:(0,jsx_runtime.jsx)("button",{onClick(e){onClick&&onClick(e)},disabled:disabled,type:type,className:classNames(disabled?"bg-opacity-75":"","outlined"===variant?"".concat(border):"","contained"===variant?"text-white":"".concat(textColor),"contained"===variant?"".concat(bgColor):"","contained"===variant?"hover:opacity-90":"hover:".concat(bgColor," hover:bg-opacity-25 hover:").concat(textColor),"".concat(padding),"rounded-md w-full h-full flex justify-center items-center button capitalize"),children:loading?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children}):(0,jsx_runtime.jsx)("div",{className:classNames(disabled?"bg-opacity-75":"","relative rounded-full animate-spin h-4 w-4 border-2 border-b-transparent border-t-white border-l-white border-r-white")})})})};AppButton.defaultProps={className:"",variant:"contained",disabled:!1,textColor:"text-primary",bgColor:"bg-primary",border:"border border-primary",height:"h-10",padding:"px-4 py-2",type:"button",loading:!0,onClick(){}};var formik_esm=__webpack_require__(2175),es=__webpack_require__(4231);let initialStateProductoPedido={product:{id:0,name:"",category:"",price:0,brand:""},quantity:0},initialStateOpts={limit:25,page:1,filter:"",replaceAll:!1},initialStateSearch={filter:""},productSearchSchema={filter:es.Z_().optional()},productEditSchema={quantity:es.Rx().required("El campo cantidad es requerido").positive("El n\xfamero debe ser positivo")},ProductoPedidoContext=react.createContext({}),ProductoPedidoProvider=param=>{let{children}=param,[productosPedido,setProductosPedido]=(0,react.useState)([]),[total,setTotal]=(0,react.useState)(0),[openModal,setOpenModal]=(0,react.useState)(!1),[openConfirm,setOpenConfirm]=(0,react.useState)(!1),formikProductEdit=(0,formik_esm.TA)({initialValues:initialStateProductoPedido,validationSchema:es.Ry(productEditSchema),validateOnChange:!0,async onSubmit(formValue){console.log(formValue),setProductosPedido(productosPedido.map(item=>item.product.id===formValue.product.id?{...item,quantity:Number(formValue.quantity)}:item)),setOpenModal(!1)}}),getTotal=()=>{let totalPrice=0;productosPedido.forEach(item=>totalPrice+=item.product.price*item.quantity),setTotal(totalPrice)};return(0,react.useEffect)(()=>(getTotal(),()=>{setTotal(0)}),[productosPedido]),(0,jsx_runtime.jsx)(ProductoPedidoContext.Provider,{value:{openConfirm,setOpenConfirm,openModal,setOpenModal,productosPedido,setProductosPedido,formikProductEdit,total},children:children})};function useProductoPedido(){let context=react.useContext(ProductoPedidoContext);if(!context)throw Error("useProductoPedido debe estar dentro del proveedor usuario context");return context}var transition=__webpack_require__(4829),dialog=__webpack_require__(728),ExclamationTriangleIcon=__webpack_require__(6244),CheckCircleIcon=__webpack_require__(50),QuestionMarkCircleIcon=__webpack_require__(6799);let AppConfirm=param=>{let{open,setOpen,message,onConfirm,title,buttonText,type}=param,styleColorButton="";"danger"===type&&(styleColorButton="bg-red-600 hover:bg-red-700"),"success"===type&&(styleColorButton="bg-green-600 hover:bg-green-700"),"warning"===type&&(styleColorButton="bg-yellow-600 hover:bg-yellow-700");let cancelButtonRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)(transition.u.Root,{show:open,as:react.Fragment,children:(0,jsx_runtime.jsx)(dialog.V,{as:"div",className:"fixed z-50 inset-0 overflow-y-auto",initialFocus:cancelButtonRef,onClose:setOpen,children:(0,jsx_runtime.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,jsx_runtime.jsx)(transition.u.Child,{as:react.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,jsx_runtime.jsx)(dialog.V.Overlay,{className:"fixed inset-0 bg-secondary bg-opacity-75 transition-opacity"})}),(0,jsx_runtime.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,jsx_runtime.jsx)(transition.u.Child,{as:react.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,jsx_runtime.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[(0,jsx_runtime.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,jsx_runtime.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,jsx_runtime.jsxs)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ".concat("danger"===type?"bg-red-100":""," ").concat("success"===type?"bg-green-100":""," ").concat("warning"===type?"bg-yellow-100":""," sm:mx-0 sm:h-10 sm:w-10"),children:["danger"===type&&(0,jsx_runtime.jsx)(ExclamationTriangleIcon.Z,{className:"h-6 w-6 text-red-600","aria-hidden":"true"}),"success"===type&&(0,jsx_runtime.jsx)(CheckCircleIcon.Z,{className:"h-6 w-6 text-green-600","aria-hidden":"true"}),"warning"===type&&(0,jsx_runtime.jsx)(QuestionMarkCircleIcon.Z,{className:"h-6 w-6 text-yellow-600","aria-hidden":"true"})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,jsx_runtime.jsx)(dialog.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:title}),(0,jsx_runtime.jsx)("div",{className:"mt-2",children:(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500",children:message})})]})]})}),(0,jsx_runtime.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[(0,jsx_runtime.jsx)(esm.Z,{className:"w-full inline-flex justify-center sm:w-auto",children:(0,jsx_runtime.jsx)("button",{type:"button",className:"".concat(styleColorButton,"  w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"),onClick(){onConfirm(),setOpen(!1)},children:buttonText})}),(0,jsx_runtime.jsx)(esm.Z,{className:"w-full inline-flex justify-center sm:w-auto",children:(0,jsx_runtime.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>setOpen(!1),ref:cancelButtonRef,children:"Cancel"})})]})]})})]})})})};AppConfirm.defaultProps={title:"Remove",buttonText:"Remove",type:"danger"};var EyeIcon=__webpack_require__(2940),EyeSlashIcon=__webpack_require__(3023);let AppInputText=param=>{let{passwordEye,required,labelWidth,classNameCaption,disabled,width,direction,name,value,onKeyDown,label,placeholder,type,autoComplete,onChange,padding,onFocus,helpText,helpColor,helpBorder,borderColor,bgColor,bgPlaceholder,labelColor,className,height,helpTextHeight,passwordEyeColor}=param,classNames=function(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")},[eye,setEye]=(0,react.useState)(!1),[tipo,setTipo]=(0,react.useState)("".concat(type));return(0,jsx_runtime.jsxs)("div",{className:"".concat(direction," ").concat(width),children:[label&&(0,jsx_runtime.jsx)("div",{className:"my-2 ".concat(labelWidth),children:(0,jsx_runtime.jsxs)("label",{htmlFor:name,className:"block text-sm whitespace-nowrap relative font-medium ".concat(labelColor," mt-1"),children:[label,required&&(0,jsx_runtime.jsx)("span",{className:"text-red-500 ml-2",children:"*"})]})}),(0,jsx_runtime.jsxs)("div",{className:"w-full",children:[(0,jsx_runtime.jsxs)("div",{className:"relative w-full",children:[(0,jsx_runtime.jsx)("input",{disabled:disabled,id:name,name:name,value:value,placeholder:placeholder,autoComplete:autoComplete,type:null!=tipo?tipo:"text",onChange:onChange,onFocus(e){onFocus&&onFocus(e)},onKeyDown(e){onKeyDown&&onKeyDown(e)},className:classNames("".concat(bgColor),"".concat(height),"".concat(bgPlaceholder),helpText?"".concat(helpBorder):"".concat(borderColor),"".concat(padding),disabled?"text-gray-400":"","appearance-none block w-full items-center rounded-md focus:outline-none sm:text-sm","".concat(className))}),passwordEye&&(0,jsx_runtime.jsx)("div",{children:eye?(0,jsx_runtime.jsx)(EyeSlashIcon.Z,{onClick(){setEye(!1),setTipo("password")},className:classNames("w-5 h-5 absolute top-[10px] right-[15px]","".concat(passwordEyeColor))}):(0,jsx_runtime.jsx)(EyeIcon.Z,{onClick(){setEye(!0),setTipo("text")},className:classNames("w-5 h-5 absolute top-[10px] right-[15px]","".concat(passwordEyeColor))})})]}),""!==helpText&&(0,jsx_runtime.jsx)("div",{className:classNames("".concat(helpColor),"caption mt-1","".concat(helpTextHeight),"".concat(classNameCaption)),children:helpText})]})]})};AppInputText.defaultProps={passwordEye:!1,required:!1,labelWidth:"",classNameCaption:"",disabled:!1,width:"",direction:"flex flex-col items-start",label:"",placeholder:"",type:"text",autoComplete:"off",padding:"px-3",helpText:"",onFocus(){},onChange(){},onKeyDown(){},helpColor:"text-red-500",helpBorder:"border-red-500 border-2",borderColor:"",bgColor:"bg-background",bgPlaceholder:"placeholder-gray-400",labelColor:"text-gray-700",className:"",height:"h-10",helpTextHeight:"h-2",passwordEyeColor:"text-black"};let ModalEditProducto=()=>{let{formikProductEdit}=useProductoPedido(),handleChangeInput=e=>{formikProductEdit.setFieldValue(e.target.name,e.target.value)},handleFocusInput=e=>{formikProductEdit.setFieldError(e.target.name,"")},handleSubmitForm=e=>{e.preventDefault(),formikProductEdit.submitForm()};return(0,jsx_runtime.jsxs)("form",{onSubmit:handleSubmitForm,className:"w-full h-full p-5 flex gap-3 flex-col",children:[(0,jsx_runtime.jsx)(AppInputText,{className:"focus:border-secondary focus:border-[1px] transition-colors duration-500",label:"Nombre",name:"name",required:!0,disabled:!0,value:formikProductEdit.values.product.name}),(0,jsx_runtime.jsx)(AppInputText,{label:"Cantidad",name:"quantity",placeholder:"Ingrese la cantidad",type:"number",helpText:formikProductEdit.errors.quantity,value:"".concat(formikProductEdit.values.quantity),onFocus:handleFocusInput,onChange:handleChangeInput,required:!0}),(0,jsx_runtime.jsx)(AppInputText,{className:"focus:border-secondary focus:border-[1px] transition-colors duration-500",label:"Precio",name:"priceCost",required:!0,disabled:!0,value:"".concat(formikProductEdit.values.product.price*formikProductEdit.values.quantity)}),(0,jsx_runtime.jsx)("div",{className:"w-full flex justify-end",children:(0,jsx_runtime.jsx)(AppButton,{type:"submit",bgColor:"bg-yellow-500",children:(0,jsx_runtime.jsxs)("div",{className:"flex gap-2",children:[(0,jsx_runtime.jsx)(PencilIcon.Z,{className:"w-5 text-black"}),(0,jsx_runtime.jsx)("span",{className:"text-black",children:"Editar Producto"})]})})})]})};var XMarkIcon=__webpack_require__(1415);let AppModal=param=>{let{xIcon,IconHeader,headerText,headerBgColor,headerColor,open,onClose,children,width,overflowClosed}=param,cancelButtonRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)(transition.u.Root,{show:open,as:react.Fragment,children:(0,jsx_runtime.jsx)(dialog.V,{as:"div",className:"fixed z-30 inset-0 overflow-y-auto",initialFocus:cancelButtonRef,onClose:overflowClosed?e=>onClose(e):()=>{},children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,jsx_runtime.jsx)(transition.u.Child,{as:react.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,jsx_runtime.jsx)(dialog.V.Overlay,{className:"fixed inset-0 bg-secondary bg-opacity-75 transition-opacity"})}),(0,jsx_runtime.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,jsx_runtime.jsx)(transition.u.Child,{as:react.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,jsx_runtime.jsxs)("div",{className:"inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle ".concat(headerText?"p-0":"p-4 md:p-6"," ").concat(width),children:[headerText&&(0,jsx_runtime.jsxs)("div",{className:"h-14 p-4 ".concat(headerBgColor," ").concat(headerColor," w-full flex gap-2"),children:[IconHeader?(0,jsx_runtime.jsx)(IconHeader,{className:"w-5"}):null,(0,jsx_runtime.jsx)("span",{children:headerText})]}),xIcon&&(0,jsx_runtime.jsx)("div",{className:"absolute top-0 right-0 pt-4 pr-4",children:(0,jsx_runtime.jsxs)("button",{type:"button",className:" ".concat(headerText?"bg-transparent ".concat(headerColor):"bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"," "),onClick:e=>onClose(e),children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Close"}),(0,jsx_runtime.jsx)(XMarkIcon.Z,{className:"h-6 w-6","aria-hidden":"true"})]})}),children]})})]})})})};AppModal.defaultProps={headerBgColor:"bg-secondary",headerColor:"text-white",width:"lg:w-1/4 md:w-1/2 sm:w-1/2 w-full",overflowClosed:!1,xIcon:!0,IconHeader:"",headerText:""};let PedidoSide=()=>{let{productosPedido,setOpenModal,openModal,setProductosPedido,setOpenConfirm,openConfirm,formikProductEdit,total}=useProductoPedido(),handleEditButton=item=>{formikProductEdit.setFieldValue("product",item.product),formikProductEdit.setFieldValue("quantity",item.quantity),setOpenModal(!0)},handleTrashButton=item=>{formikProductEdit.setFieldValue("product",item.product),formikProductEdit.setFieldValue("quantity",item.quantity),setOpenConfirm(!0)},handleConfirmDelete=()=>{setProductosPedido(productosPedido.filter(item=>item.product.id!==formikProductEdit.values.product.id))},columns=(0,jsx_runtime.jsx)("tr",{children:[{field:"name",label:"Producto",orderBy:!1,type:"string"},{field:"quantity",label:"Cantidad",orderBy:!1,type:"number"},{field:"price",label:"Precio",orderBy:!1,type:"number"},{field:"",label:"Opciones",orderBy:!1,type:"string"}].map(item=>(0,jsx_runtime.jsx)("th",{className:"px-3 py-3 border-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-full flex gap-1 items-center justify-start",children:item.label})},item.label))}),rows=productosPedido.map((item,i)=>(0,jsx_runtime.jsxs)("tr",{className:"".concat(i%2!=0?"bg-gray-50 hover:bg-gray-100":"bg-gray-100 hover:bg-gray-200"),children:[(0,jsx_runtime.jsx)("td",{className:"border-r-2 border-r-gray-500 px-6 py-2 lg:whitespace-nowrap text-sm font-medium text-gray-900",children:item.product.name}),(0,jsx_runtime.jsx)("td",{className:"border-r-2 border-r-gray-500 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900",children:item.quantity}),(0,jsx_runtime.jsx)("td",{className:"border-r-2 border-r-gray-500 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900",children:parseFloat("".concat(item.product.price*item.quantity)).toFixed(2)}),(0,jsx_runtime.jsx)("td",{className:"border-0 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900",children:(0,jsx_runtime.jsxs)("div",{className:"w-full h-full flex justify-around gap-2",children:[(0,jsx_runtime.jsx)(AppButton,{height:"h-5",padding:"p-1",className:"",bgColor:"bg-yellow-400",onClick(){handleEditButton(item)},children:(0,jsx_runtime.jsx)(PencilIcon.Z,{className:"w-4"})}),(0,jsx_runtime.jsx)(AppButton,{height:"h-5",padding:"p-1",className:"",bgColor:"bg-red-400",onClick(){handleTrashButton(item)},children:(0,jsx_runtime.jsx)(TrashIcon.Z,{className:"w-4"})})]})})]},item.product.id));return(0,jsx_runtime.jsxs)("div",{className:"w-full h-full p-4",children:[(0,jsx_runtime.jsx)("p",{className:"text-center uppercase font-bold",children:"Pedido"}),(0,jsx_runtime.jsxs)("div",{className:"p-2",children:[(0,jsx_runtime.jsx)(AppTable,{emptyMessage:"No hay productos seleccionados",loading:!0,columns:columns,count:productosPedido.length,rows:rows}),(0,jsx_runtime.jsx)(AppConfirm,{message:"\xbfSeguro que desea quitar este producto de la lista?",onConfirm:handleConfirmDelete,setOpen:setOpenConfirm,title:"Quitar producto",buttonText:"S\xed",open:openConfirm}),(0,jsx_runtime.jsx)(AppModal,{IconHeader:PencilIcon.Z,headerBgColor:"bg-gradient-to-r from-yellow-500 to-yellow-300",headerText:"Editar Producto",headerColor:"text-black",open:openModal,overflowClosed:!0,onClose(){setOpenModal(!1)},children:(0,jsx_runtime.jsx)(ModalEditProducto,{})})]}),(0,jsx_runtime.jsx)("div",{className:"p-2 w-full text-right uppercase font-bold",children:"Total: S/.".concat(total)})]})};var axios=__webpack_require__(196);let request=axios.ZP.create({baseURL:"https://integracion-app.onrender.com"});request.interceptors.request.use(async config=>{let token=await localStorage.getItem("token");return config.headers.Authorization="Bearer ".concat(token),config.headers["Content-Type"]="application/json",config}),request.interceptors.response.use(async response=>response);let api="/api/v1/product",getProductsService=async opts=>""===opts.filter?request.get("".concat(api,"?limit=").concat(opts.limit,"&page=").concat(opts.page)):request.get("".concat(api,"?limit=").concat(opts.limit,"&page=").concat(opts.page,"&filter=").concat(opts.filter));var class_ClsProduct=class{static async getProducts(opts){let res=await getProductsService(opts),{cantidad,products,success}=res.data;return{products,cantidad,success}}};let orderArrayByField=(field,order,type,array)=>{let unSortedArray=[...array],sortedArray=unSortedArray.sort((item1,item2)=>{if("number"===type){if("asc"===order)return parseFloat("".concat(item1[field]))-parseFloat("".concat(item2[field]));if("desc"===order)return parseFloat("".concat(item2[field]))-parseFloat("".concat(item1[field]))}if("asc"===order){if("".concat(item1[field])<"".concat(item2[field]))return -1;if("".concat(item1[field])>"".concat(item2[field]))return 1}if("desc"===order){if("".concat(item1[field])>"".concat(item2[field]))return -1;if("".concat(item1[field])<"".concat(item2[field]))return 1}return 0});return sortedArray},ProductoContext=react.createContext({}),ProductoProvider=param=>{let{children}=param,[productos,setProductos]=(0,react.useState)([]),[productsQuantity,setProductsQuantity]=(0,react.useState)(0),[loadingData,setLoadingData]=(0,react.useState)(!1),[opts,setOpts]=(0,react.useState)(initialStateOpts),[openModal,setOpenModal]=(0,react.useState)(!1),[fieldState,setFieldState]=(0,react.useState)(""),[orderState,setOrderState]=(0,react.useState)(""),[openConfirm,setOpenConfirm]=(0,react.useState)(!1),formikSearch=(0,formik_esm.TA)({initialValues:initialStateSearch,validationSchema:es.Ry(productSearchSchema),validateOnChange:!1,validateOnMount:!1,validateOnBlur:!1,onSubmit:async formValue=>""===formValue.filter?setOpts({...opts,filter:"",page:1,replaceAll:!0}):formValue.filter.length<3?null:setOpts({...opts,filter:formValue.filter.trim(),page:1,replaceAll:!0})}),getProducts=async()=>{try{setLoadingData(!1);let{products,cantidad}=await class_ClsProduct.getProducts(opts);if(setLoadingData(!0),setProductsQuantity(cantidad),opts.replaceAll)return setProductos(products);return setProductos([...productos,...products])}catch(error){return setLoadingData(!0),setProductsQuantity(0),setProductos([])}},orderBy=(field,order,type)=>{setFieldState(field),setOrderState(order),setProductos(orderArrayByField(field,order,type,productos))};return(0,react.useEffect)(()=>(getProducts(),()=>{opts.replaceAll&&setProductos([]),setOpenModal(!1)}),[opts]),(0,jsx_runtime.jsx)(ProductoContext.Provider,{value:{formikSearch,productos,setProductos,openModal,setOpenModal,orderBy,fieldState,orderState,openConfirm,setOpenConfirm,opts,setOpts,productsQuantity,loadingData,setLoadingData},children:children})};var react_toastify_esm=__webpack_require__(2920);let ProductoItem=param=>{let{producto}=param,{productosPedido,setProductosPedido}=useProductoPedido(),formikQuantity=(0,formik_esm.TA)({validationSchema:es.Ry(productEditSchema),initialValues:{quantity:0},initialErrors:{quantity:""},onSubmit(formValues){let finded=!0;if(console.log(producto),setProductosPedido(productosPedido.map(item=>item.product.id===producto.id?(finded=!1,{...item,quantity:item.quantity+formValues.quantity}):item)),finded){let newProduct={id:producto.id,name:producto.name,price:producto.price,brand:producto.brand,category:producto.category};setProductosPedido([...productosPedido,{product:newProduct,quantity:formValues.quantity}])}}}),handleChangeQuantity=e=>{formikQuantity.setFieldValue("quantity",Number(e.target.value))},handleClickButton=e=>formikQuantity.values.quantity<=0?react_toastify_esm.Am.warning("Ingrese una cantidad",{autoClose:2e3,closeButton:!0,draggable:!0}):formikQuantity.submitForm();return(0,jsx_runtime.jsxs)("div",{className:"border-2 border-blue-800 rounded-md p-4 flex flex-row flex-nowrap justify-between",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{className:"uppercase font-bold",children:producto.name}),(0,jsx_runtime.jsx)("p",{children:"S/. ".concat(producto.price)}),(0,jsx_runtime.jsx)("p",{children:producto.category}),(0,jsx_runtime.jsx)("p",{children:producto.brand})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col w-3/12 gap-4",children:[(0,jsx_runtime.jsx)(AppInputText,{borderColor:"border-secondary",width:"w-full",className:"focus:border-primary hover:border-primary border-2 transition-colors duration-500",helpColor:"hidden",helpText:formikQuantity.errors.quantity,value:"".concat(formikQuantity.values.quantity),name:"quantity".concat(producto.id),label:"Cantidad:",labelWidth:"lg:block hidden",direction:"flex lg:flex-row md:flex-col lg:gap-2",onChange:handleChangeQuantity}),(0,jsx_runtime.jsx)(AppButton,{onClick:handleClickButton,bgColor:"bg-green-600",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row gap-1 items-center justify-center",children:[(0,jsx_runtime.jsx)("p",{className:"p-0 lg:block md:hidden sm:hidden hidden",children:"Agregar"}),(0,jsx_runtime.jsx)("i",{className:"ri-add-circle-line"})]})})]})]})},ProductoSide=()=>{let{productos,opts,loadingData,productsQuantity,setLoadingData,setOpts,formikSearch}=function(){let context=react.useContext(ProductoContext);if(!context)throw Error("useProducto debe estar dentro del proveedor usuario context");return context}(),handleSearchFormSubmit=e=>{e.preventDefault(),formikSearch.submitForm()},handleSearchInput=e=>{formikSearch.setFieldValue("filter",e.target.value)},handleScrollChange=e=>{let container=e.currentTarget,containerSize=container.scrollHeight-container.clientHeight,percentageScrolled=Math.floor(container.scrollTop/containerSize*100);percentageScrolled>90&&loadingData&&opts.page<Math.ceil(productsQuantity/opts.limit)&&(setLoadingData(!1),setOpts({...opts,page:opts.page+1,replaceAll:!1}))};return(0,jsx_runtime.jsxs)("div",{className:"w-full h-full p-4",children:[(0,jsx_runtime.jsx)("p",{className:"text-center uppercase font-bold",children:"Productos"}),(0,jsx_runtime.jsx)("div",{className:"p-2",children:(0,jsx_runtime.jsxs)("form",{className:"relative",onSubmit:handleSearchFormSubmit,children:[(0,jsx_runtime.jsx)(AppInputText,{borderColor:"border-secondary",helpColor:"text-red-600",width:"w-full",required:!0,className:"focus:border-primary hover:border-primary border-2 transition-colors duration-500",placeholder:"Buscar Producto",value:formikSearch.values.filter,name:"search",onChange:handleSearchInput}),(0,jsx_runtime.jsx)("i",{className:"ri-search-line w-5 h-5 absolute right-5 top-2 focus:text-primary hover:text-primary transition-colors duration-500"})]})}),(0,jsx_runtime.jsxs)("div",{className:"h-[calc(30rem)] p-2 flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent",onScroll:handleScrollChange,children:[productos.map(item=>(0,jsx_runtime.jsx)(ProductoItem,{producto:item},item.id)),0===productos.length&&(0,jsx_runtime.jsx)("div",{className:"w-full text-center uppercase font-bold py-10 bg-background h-full",children:"No hay resultados"})]})]})},CotizaPage=()=>(0,jsx_runtime.jsx)("div",{className:"w-full bg-background flex lg:flex-row md:flex-row lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap sm:flex-col gap-5 p-5",children:(0,jsx_runtime.jsx)(ProductoPedidoProvider,{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"lg:w-1/2 md:w-1/2 sm:w-full w-full",children:(0,jsx_runtime.jsx)(ProductoProvider,{children:(0,jsx_runtime.jsx)(ProductoSide,{})})}),(0,jsx_runtime.jsx)("div",{className:"lg:w-1/2 md:w-1/2 sm:w-full w-full border-l-2 border-l-blue-900",children:(0,jsx_runtime.jsx)(PedidoSide,{})})]})})}),Cotiza=()=>(0,jsx_runtime.jsx)(CotizaPage,{});var cotiza=Cotiza}},function(__webpack_require__){__webpack_require__.O(0,[989,774,888,179],function(){return __webpack_require__(__webpack_require__.s=1299)}),_N_E=__webpack_require__.O()}]);