  ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
    end
end)

RegisterCommand("ekip", function(source, args)
    SetDisplay(true)
end)


function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end


  RegisterNUICallback('close', function()
    SetNuiFocus(false)
    SetNuiFocusKeepInput(true)
  end)

