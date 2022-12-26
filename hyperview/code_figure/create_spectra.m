function create_spectra(B)
cd ../data
Basename = 'spectrum_'
parfor i = 1:211
for j=1:377
FileName=[Basename,'x', num2str(i),'y',num2str(j)]
hfig = figure;
plot(wavenumber1,squeeze(B(i,j,:)),'linewidth',2);
ylabel('Intensity (A.U)','FontName','Hlevetica');
xlabel('Raman shift (cm^{-1})','FontName','Helvetica');
xlim([500,3020])
ylim([0,265])
picturewidth = 18;
hw_ratio = 0.55;
set(findall(hfig,'-property','FontSize'),'FontSize',26)
%set(findall(hfig,'-property','interpreter'),'interpreter','latex')
%set(findall(hfig,'-property','TickLabelinterpreter'),'TickLabelinterpreter','latex')
set(hfig,'Units','centimeter','Position',[8 4 picturewidth picturewidth*hw_ratio]);
pos = get(hfig,'Position');
set(hfig,'PaperPositionMode','Auto','PaperUnits','centimeters','PaperSize',[pos(3) pos(4)])
set(hfig,'visible','off');
%print(hfig,'pdf_figure','-dpdf','-painters','-fillpage')
print(hfig,FileName,'-dpng','-painters')
close
end
end